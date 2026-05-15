const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    PermissionsBitField,
    ChannelType
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates
    ]
});

const TOKEN = process.env.TOKEN;

// ================= SHOP =================

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
    { nume: 'VIP Emerald - 30 Zile', pret: '40€' },
    { nume: 'VIP Diamond - 30 Zile', pret: '50€' }
];

// ================= READY =================

client.once('ready', () => {
    console.log('Bot online!');
    client.user.setActivity('Originalii Romania');
});

// ================= WELCOME =================

client.on('guildMemberAdd', member => {

    const canal = member.guild.channels.cache.find(c => c.name === 'welcome');

    if (!canal) return;

    const embed = new EmbedBuilder()
        .setTitle('👋 Bine ai venit!')
        .setDescription(`Salut ${member} bine ai venit pe ORIGINALII ROMANIA!`)
        .setColor('Blue')
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp();

    canal.send({ embeds: [embed] });
});

// ================= VOICE LOGS =================

client.on('voiceStateUpdate', (oldState, newState) => {

    const canal = oldState.guild.channels.cache.find(c => c.name === 'voice-logs');

    if (!canal) return;

    if (!oldState.channel && newState.channel) {
        canal.send(`🔊 ${newState.member.user.tag} a intrat pe voice.`);
    }

    if (oldState.channel && !newState.channel) {
        canal.send(`🔇 ${oldState.member.user.tag} a ieșit de pe voice.`);
    }
});

// ================= COMMANDS =================

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    // SHOP
    if (message.content === '!shop') {

        let text = '';

        shop.forEach(item => {
            text += `🛒 ID ${item.id} • ${item.nume} • 💶 ${item.pret}\n`;
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

            .setThumbnail('https://cdn-icons-png.flaticon.com/512/3135/3135715.png')

            .setImage('https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1400&auto=format&fit=crop')

            .setFooter({
                text: 'Originalii Romania • Shop Oficial',
                iconURL: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    }

    // VIP SHOP
    if (message.content === '!vipshop') {

        let text = '';

        vipshop.forEach(item => {
            text += `⭐ ${item.nume} • 💶 ${item.pret}\n`;
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

    // DONATE
    if (message.content === '!donate') {

        const embed = new EmbedBuilder()
            .setTitle('💸 DONAȚII')
            .setDescription(
                '💠 Revolut\n' +
                '🏦 Transfer Bancar\n' +
                '💙 PayPal'
            )
            .setColor('Green')
            .setImage('https://i.imgur.com/7lcwJEN.jpeg');

        message.channel.send({ embeds: [embed] });
    }

    // LIVE SERVER STATUS
    if (message.content === '!server') {

        try {

            const response = await fetch('https://servers-frontend.fivem.net/api/servers/single/5oyzqr7');
            const data = await response.json();

            const players = data.Data.clients;
            const maxPlayers = data.Data.sv_maxclients;

            const embed = new EmbedBuilder()

                .setTitle('🎮 ORIGINALII ROMANIA • SERVER STATUS')

                .setDescription(
                    '━━━━━━━━━━━━━━━━━━\n' +
                    '🟢 **Server Online**\n\n' +
                    `👥 **Players:** \`${players}/${maxPlayers}\`\n\n` +
                    '🌐 **Connect:**\n' +
                    '`cfx.re/join/5oyzqr7`\n' +
                    '━━━━━━━━━━━━━━━━━━'
                )

                .addFields(
                    {
                        name: '⚡ STATUS',
                        value: '🟢 Healthy',
                        inline: true
                    },
                    {
                        name: '⏰ UPTIME',
                        value: '24/7',
                        inline: true
                    },
                    {
                        name: '🔥 SERVER',
                        value: 'Romania RP',
                        inline: true
                    }
                )

                .setColor('#ff0000')

                .setThumbnail('https://cdn-icons-png.flaticon.com/512/5968/5968292.png')

                .setImage('https://i.imgur.com/7lcwJEN.jpeg')

                .setFooter({
                    text: 'Originalii Romania • FiveM',
                    iconURL: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
                })

                .setTimestamp();

            message.channel.send({ embeds: [embed] });

        } catch (err) {

            message.channel.send('❌ Server offline.');

        }
    }

    // BUY
    if (message.content.startsWith('!buy')) {

        const args = message.content.split(' ');
        const produs = args[1];

        if (!produs) {
            return message.reply('❌ Folosește: !buy ID');
        }

        const canal = await message.guild.channels.create({
            name: `buy-${message.author.username}`,
            type: ChannelType.GuildText,
            permissionOverwrites: [
                {
                    id: message.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel]
                },
                {
                    id: message.author.id,
                    allow: [PermissionsBitField.Flags.ViewChannel]
                }
            ]
        });

        canal.send(`🛒 ${message.author} a deschis un ticket pentru produsul ID ${produs}`);
    }

    // HELP
    if (message.content === '!help') {

        const embed = new EmbedBuilder()
            .setTitle('📖 COMENZI BOT')
            .setDescription(
                '`!shop` - shop server\n' +
                '`!vipshop` - vip shop\n' +
                '`!donate` - donații\n' +
                '`!server` - status server live\n' +
                '`!buy ID` - ticket cumpărare'
            )
            .setColor('Purple');

        message.channel.send({ embeds: [embed] });
    }

});

client.login(TOKEN);