const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const TOKEN = process.env.TOKEN;

// ================= READY =================

client.once('ready', () => {

    console.log('Bot online!');

    client.user.setActivity('Originalii Romania');

});

// ================= COMMANDS =================

client.on('messageCreate', async message => {

    if (message.author.bot) return;

    // ================= SERVER =================

    if (message.content === '!server') {

        try {

            const response = await fetch(
                'https://servers-frontend.fivem.net/api/servers/single/5oyzqr7'
            );

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

                .setThumbnail('https://i.imgur.com/1X4JQ9x.png')

                .setImage('https://i.imgur.com/r6VtAqF.jpeg')

                .setFooter({
                    text: 'Originalii Romania • FiveM',
                    iconURL: 'https://i.imgur.com/1X4JQ9x.png'
                })

                .setTimestamp();

            message.channel.send({ embeds: [embed] });

        } catch (error) {

            console.log(error);

            message.channel.send('❌ Server offline.');

        }

    }

});

client.login(TOKEN);