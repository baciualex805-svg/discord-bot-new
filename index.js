const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const TOKEN = process.env.TOKEN;

const shop = [
    { id: 5, nume: 'VIP Diamond + 1.000.000 Bani', pret: '50€' },
    { id: 6, nume: 'VIP Gold + 1.000.000 Bani', pret: '45€' },
    { id: 8, nume: 'VIP Silver + 1.000.000 Bani', pret: '40€' },
    { id: 9, nume: 'VIP Bronze + 1.000.000 Bani', pret: '35€' },
    { id: 10, nume: 'VIP Gold + 1.000.000 Bani', pret: '30€' },

    { id: '11 - 20', nume: 'Pachet Special', pret: '25€' },
    { id: '21 - 30', nume: 'Pachet Premium', pret: '20€' },
    { id: '31 - 40', nume: 'Pachet Medium', pret: '17€' },
    { id: '41 - 50', nume: 'Pachet Basic', pret: '15€' }
];

const vipshop = [
    { nume: 'VIP Bronze - 30 Zile', pret: '10€' },
    { nume: 'VIP Silver - 30 Zile', pret: '20€' },
    { nume: 'VIP Gold - 30 Zile', pret: '30€' },
    { nume: 'VIP Diamond - 30 Zile', pret: '35€' }
];

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('messageCreate', message => {

    if (message.author.bot) return;

    if (message.content === '!shop') {

        let text = '';

        shop.forEach(item => {
            text += 'ID ' + item.id + ' • ' + item.nume + ' • ' + item.pret + '\n';
        });

        const embed = new EmbedBuilder()
            .setTitle('ORIGINALII ROMANIA SHOP')
            .setDescription(text)
            .addFields({
                name: 'Plata',
                value: 'Plata se face doar către:\n@Legend\n@Tata Bodi\n@kenny\n\nAlte plăți NU se iau în considerare.'
            })
            .setColor('Blue');

        message.channel.send({ embeds: [embed] });
    }

    if (message.content === '!vipshop') {

        let text = '';

        vipshop.forEach(item => {
            text += item.nume + ' • ' + item.pret + '\n';
        });

        const embed = new EmbedBuilder()
            .setTitle('ORIGINALII ROMANIA VIP SHOP')
            .setDescription(text)
            .addFields({
                name: 'Plata',
                value: 'Plata se face doar către:\n@Legend\n@Tata Bodi\n@kenny\n\nAlte plăți NU se iau în considerare.'
            })
            .setColor('Gold');

        message.channel.send({ embeds: [embed] });
    }

});

client.login(TOKEN);