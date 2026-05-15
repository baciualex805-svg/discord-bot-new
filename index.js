const {
    Client,
    GatewayIntentBits,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    StringSelectMenuBuilder,
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

    // ================= PANEL =================

    if (message.content === '!panel') {

        const embed = new EmbedBuilder()

            .setTitle('🎫 ORIGINALII ROMANIA • SUPPORT')

            .setDescription(
                '━━━━━━━━━━━━━━━━━━\n' +
                '📩 APASĂ PE BUTONUL DE MAI JOS\n' +
                'pentru a deschide un ticket.\n' +
                '━━━━━━━━━━━━━━━━━━'
            )

            .setColor('#ff0000')

            .setFooter({
                text: 'Originalii Romania • Ticket System'
            });

        const row = new ActionRowBuilder().addComponents(

            new ButtonBuilder()
                .setCustomId('open_ticket_menu')
                .setLabel('🎫 DESCHIDE TICKET')
                .setStyle(ButtonStyle.Danger)

        );

        message.channel.send({
            embeds: [embed],
            components: [row]
        });

    }

});

// ================= INTERACTIONS =================

client.on('interactionCreate', async interaction => {

    // ================= BUTTONS =================

    if (interaction.isButton()) {

        // ================= OPEN MENU =================

        if (interaction.customId === 'open_ticket_menu') {

            const menu = new StringSelectMenuBuilder()

                .setCustomId('ticket_select')

                .setPlaceholder('📩 Alege categoria ticketului')

                .addOptions([
                    {
                        label: 'Raport Admin',
                        description: 'Raportează un admin',
                        value: 'Raport Admin',
                        emoji: '⚠️'
                    },
                    {
                        label: 'Shop',
                        description: 'Probleme shop',
                        value: 'Shop',
                        emoji: '🛒'
                    },
                    {
                        label: 'Donații',
                        description: 'Probleme donații',
                        value: 'Donații',
                        emoji: '💰'
                    },
                    {
                        label: 'Probleme Generale',
                        description: 'Ajutor general',
                        value: 'Probleme Generale',
                        emoji: '🆘'
                    },
                    {
                        label: 'Contact Owneri',
                        description: 'Contact owneri',
                        value: 'Contact Owneri',
                        emoji: '👑'
                    }
                ]);

            const row = new ActionRowBuilder().addComponents(menu);

            return interaction.reply({
                content: '📩 Selectează categoria ticketului:',
                components: [row],
                ephemeral: true
            });

        }

        // ================= CLOSE =================

        if (interaction.customId === 'close_ticket') {

            await interaction.reply({
                content: '❌ Ticket-ul se va închide în 5 secunde.'
            });

            setTimeout(async () => {

                await interaction.channel.permissionOverwrites.edit(
                    interaction.guild.id,
                    {
                        SendMessages: false
                    }
                );

                interaction.channel.setName(`closed-${interaction.channel.name}`);

            }, 5000);

        }

        // ================= WAITING =================

        if (interaction.customId === 'waiting_ticket') {

            const embed = new EmbedBuilder()

                .setTitle('⏳ AȘTEPTARE')

                .setDescription(
                    '━━━━━━━━━━━━━━━━━━\n' +
                    '📩 Vei fii preluat în cel mai scurt timp\n' +
                    'de un membru staff mai mare.\n' +
                    '━━━━━━━━━━━━━━━━━━'
                )

                .setColor('#ffaa00');

            interaction.reply({
                embeds: [embed]
            });

        }

        // ================= HIGHER STAFF =================

        if (interaction.customId === 'higher_ticket') {

            const embed = new EmbedBuilder()

                .setTitle('👑 RETRIMIS')

                .setDescription(
                    '━━━━━━━━━━━━━━━━━━\n' +
                    '📩 Ticket-ul a fost retrimis\n' +
                    'către un grad superior.\n' +
                    '━━━━━━━━━━━━━━━━━━'
                )

                .setColor('#ff0000');

            interaction.reply({
                embeds: [embed]
            });

        }

        // ================= SOLVED =================

        if (interaction.customId === 'solved_ticket') {

            const user = interaction.channel.topic;

            await interaction.reply({
                content:
                    `${user}\n\n` +
                    '✅ Ticket-ul tău a fost rezolvat.\n' +
                    '⏳ Acesta se va închide în 5 minute.'
            });

            setTimeout(async () => {

                await interaction.channel.permissionOverwrites.edit(
                    interaction.guild.id,
                    {
                        SendMessages: false
                    }
                );

                interaction.channel.setName(`resolved-${interaction.channel.name}`);

            }, 300000);

        }

    }

    // ================= SELECT MENU =================

    if (interaction.isStringSelectMenu()) {

        if (interaction.customId === 'ticket_select') {

            const categorie = interaction.values[0];

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

                topic: `<@${interaction.user.id}>`,

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

            // ================= LOGS =================

            const logs = interaction.guild.channels.cache.find(
                c => c.name === 'ticket-logs'
            );

            if (logs) {

                logs.send(
                    `🟢 Ticket creat de ${interaction.user}\n📂 Categorie: ${categorie}\n📩 Canal: ${channel}`
                );

            }

            const embed = new EmbedBuilder()

                .setTitle('🎫 TICKET DESCHIS')

                .setDescription(
                    `👋 Salut ${interaction.user}\n\n` +
                    '📩 Vă mulțumim că ne-ați contactat.\n' +
                    '⏳ În cel mai scurt timp cineva din echipa noastră\n' +
                    'se va ocupa de problema dumneavoastră.\n\n' +
                    `📂 Categorie: **${categorie}**`
                )

                .setColor('#00ff88')

                .setFooter({
                    text: 'Originalii Romania • Support'
                });

            const row = new ActionRowBuilder().addComponents(

                new ButtonBuilder()
                    .setCustomId('close_ticket')
                    .setLabel('❌ Închide Ticket')
                    .setStyle(ButtonStyle.Danger),

                new ButtonBuilder()
                    .setCustomId('higher_ticket')
                    .setLabel('👑 Grad Mai Mare')
                    .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                    .setCustomId('waiting_ticket')
                    .setLabel('⏳ Așteptare')
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setCustomId('solved_ticket')
                    .setLabel('✅ Rezolvat')
                    .setStyle(ButtonStyle.Success)

            );

            await channel.send({
                content: `${interaction.user}`,
                embeds: [embed],
                components: [row]
            });

            interaction.reply({
                content: `✅ Ticket creat: ${channel}`,
                ephemeral: true
            });

        }

    }

});

client.login(TOKEN);