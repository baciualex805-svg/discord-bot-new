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
    { id: 5, nume: 'VIP Emerald + 1.000.000 Bani', pret: '50€' },
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
    { nume: 'VIP Emerald - 30 Zile', pret: '40€' },
    { nume: 'VIP Diamond - 30 Zile', pret: '50€' }
];

client.once('ready', () => {
    console.log('Bot online!');
});

client.on('messageCreate', message => {

    if (message.author.bot) return;

    // SHOP NORMAL
    if (message.content === '!shop') {

        let text = '';

        shop.forEach(item => {
            text += '🛒 ID ' + item.id + ' • ' + item.nume + ' • 💶 ' + item.pret + '\n';
        });

        const embed = new EmbedBuilder()

            .setTitle('🔥 ORIGINALII ROMANIA SHOP 🔥')

            .setDescription(
                '━━━━━━━━━━━━━━━━━━\n' +
                '💎 SHOP OFICIAL SERVER 💎\n' +
                '━━━━━━━━━━━━━━━━━━\n\n' +
                text
            )

            .addFields(
                {
                    name: '💳 METODE DE PLATĂ',
                    value:
                    '💠 REVOLUT\n' +
                    '🏦 TRANSFER BANCAR\n' +
                    '💙 PAYPAL'
                },
                {
                    name: '📌 INFORMAȚII IMPORTANTE',
                    value:
                    '✅ Plata se face DOAR către:\n\n' +
                    '👑 @Legend\n' +
                    '👑 @Tata Bodi\n' +
                    '👑 @kenny\n\n' +
                    '❌ Alte plăți NU se iau în considerare.'
                }
            )

            .setColor('#0099ff')

            .setThumbnail('https://cdn-icons-png.flaticon.com/512/5968/5968299.png')

            .setImage('https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop')

            .setFooter({
                text: 'Originalii Romania • Shop Oficial',
                iconURL: 'https://cdn-icons-png.flaticon.com/512/5968/5968299.png'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }

    // VIP SHOP
    if (message.content === '!vipshop') {

        let text = '';

        vipshop.forEach(item => {
            text += '⭐ ' + item.nume + ' • 💶 ' + item.pret + '\n';
        });

        const embed = new EmbedBuilder()

            .setTitle('👑 ORIGINALII ROMANIA VIP SHOP 👑')

            .setDescription(
                '━━━━━━━━━━━━━━━━━━\n' +
                '💎 VIP SHOP OFICIAL 💎\n' +
                '━━━━━━━━━━━━━━━━━━\n\n' +
                text
            )

            .addFields(
                {
                    name: '💳 METODE DE PLATĂ',
                    value:
                    '💠 REVOLUT\n' +
                    '🏦 TRANSFER BANCAR\n' +
                    '💙 PAYPAL'
                },
                {
                    name: '📌 INFORMAȚII IMPORTANTE',
                    value:
                    '✅ Plata se face DOAR către:\n\n' +
                    '👑 @Legend\n' +
                    '👑 @Tata Bodi\n' +
                    '👑 @kenny\n\n' +
                    '❌ Alte plăți NU se iau în considerare.'
                }
            )

            .setColor('#FFD700')

            .setThumbnail('https://cdn-icons-png.flaticon.com/512/2583/2583344.png')

            .setImage('https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1400&auto=format&fit=crop')

            .setFooter({
                text: 'Originalii Romania • VIP Shop',
                iconURL: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }

});

client.login(TOKEN);