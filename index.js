const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    PermissionsBitField,
    ChannelType
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
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

// ================= VIP SHOP =================

const vipshop = [
    { nume: 'VIP Bronze - 30 Zile', pret: '15€' },
    { nume: 'VIP Silver - 30 Zile', pret: '20€' },
    { nume: 'VIP Gold - 30 Zile', pret: '25€' },
    { nume: 'VIP Diamond - 30 Zile', pret: '30€' }
];

// ================= READY =================

client.once('ready', () => {

    console.log('Bot online!');

    client.user.setActivity('Originalii Romania');

});

// ================= COMMANDS =================

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    // ================= SHOP =================

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
                    name: '📌 PLATĂ',
                    value:
                    '✅ Plata se face DOAR către:\n\n' +
                    '👑 @Legend\n' +
                    '👑 @Tata Bodi\n' +
                    '👑 @kenny\n\n' +
                    '❌ Alte plăți NU se iau în considerare.'
                }
            )

            .setColor('#0099ff')

            .setFooter({
                text: 'Originalii Romania • Shop'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });

    }

    // ================= VIP SHOP =================

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
                    name: '📌 PLATĂ',
                    value:
                    '✅ Plata se face DOAR către:\n\n' +
                    '👑 @Legend\n' +
                    '👑 @Tata Bodi\n' +
                    '👑 @kenny\n\n' +
                    '❌ Alte plăți NU se iau în considerare.'
                }
            )

            .setColor('#FFD700')

            .setFooter({
                text: 'Originalii Romania • VIP Shop'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });

    }

    // ================= SERVER STATUS =================

    if (message.content === '!server') {

        try {

            const response = await fetch(
                'https://servers-frontend.fivem.net/api/servers/single/5oyzqr7'
            );

            const json = await response.json();

            const players = json.Data.players.length;
            const maxPlayers = json.Data.sv_maxclients;

            const embed = new EmbedBuilder()

                .setTitle('🎮 ORIGINALII ROMANIA • SERVER STATUS')

                .setDescription(
                    '━━━━━━━━━━━━━━━━━━\n' +
                    '🟢 Server Online\n\n' +
                    `👥 Players: \`${players}/${maxPlayers}\`\n\n` +
                    '🌐 Connect:\n' +
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

                .setFooter({
                    text: 'Originalii Romania • FiveM'
                })

                .setTimestamp();

            message.channel.send({ embeds: [embed] });

        } catch (error) {

            console.log(error);

            message.channel.send('❌ Server offline.');

        }

    }

    // ================= TICKET PANEL =================

    if (message.content === '!panel') {

        const embed = new EmbedBuilder()

            .setTitle('🎫 ORIGINALII ROMANIA • SUPPORT')

            .setDescription(
                '━━━━━━━━━━━━━━━━━━\n' +
                '📩 APASĂ PE BUTONUL DE MAI JOS\n' +
                'pentru a deschide un ticket.\n' +
                '━━━━━━━━━━━━━━━━━━\n\n' +
                '🛒 SHOP SUPPORT\n' +
                '⚠️ REPORT PLAYER\n' +
                '💰 DONAȚII\n' +
                '🆘 AJUTOR GENERAL'
            )

            .setColor('#ff0000')

            .setFooter({
                text: 'Originalii Romania • Ticket System'
            });

        const row = new ActionRowBuilder().addComponents(

            new ButtonBuilder()
                .setCustomId('create_ticket')
                .setLabel('🎫 DESCHIDE TICKET')
                .setStyle(ButtonStyle.Danger)

        );

        message.channel.send({
            embeds: [embed],
            components: [row]
        });

    }

});

// ================= BUTTONS =================

client.on('interactionCreate', async interaction => {

    if (!interaction.isButton()) return;

    // ================= CREATE TICKET =================

    if (interaction.customId === 'create_ticket') {

        const existing = interaction.guild.channels.cache.find(
            c => c.name === `ticket-${interaction.user.username.toLowerCase()}`
        );

        if (existing) {

            return interaction.reply({
                content: '❌ Ai deja un ticket deschis.',
                ephemeral: true
            });

        }

        const channel = await interaction.guild.channels.create({

            name: `ticket-${interaction.user.username}`,

            type: ChannelType.GuildText,

            permissionOverwrites: [

                {
                    id: interaction.guild.id,
                    deny: [PermissionsBitField.Flags.ViewChannel]
                },

                {
                    id: interaction.user.id,
                    allow: [
                        PermissionsBitField.Flags.ViewChannel,
                        PermissionsBitField.Flags.SendMessages
                    ]
                }

            ]

        });

        const embed = new EmbedBuilder()

            .setTitle('🎫 TICKET DESCHIS')

            .setDescription(
                `👋 Salut ${interaction.user}\n\n` +
                '📩 Un membru staff îți va răspunde curând.\n\n' +
                '❌ Pentru a închide ticketul apasă butonul de mai jos.'
            )

            .setColor('#00ff88')

            .setFooter({
                text: 'Originalii Romania • Support'
            });

        const closeRow = new ActionRowBuilder().addComponents(

            new ButtonBuilder()
                .setCustomId('close_ticket')
                .setLabel('❌ ÎNCHIDE TICKET')
                .setStyle(ButtonStyle.Secondary)

        );

        await channel.send({
            content: `${interaction.user}`,
            embeds: [embed],
            components: [closeRow]
        });

        interaction.reply({
            content: `✅ Ticket creat: ${channel}`,
            ephemeral: true
        });

    }

    // ================= CLOSE TICKET =================

    if (interaction.customId === 'close_ticket') {

        await interaction.reply({
            content: '❌ Ticket închis în 5 secunde...'
        });

        setTimeout(() => {

            interaction.channel.delete();

        }, 5000);

    }

});

client.login(TOKEN);