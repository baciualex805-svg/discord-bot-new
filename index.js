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

        const embed = new EmbedBuilder()

            .setTitle('🎮 ORIGINALII ROMANIA • SERVER STATUS')

            .setDescription(
                '━━━━━━━━━━━━━━━━━━\n' +
                '🟢 **Server Online**\n\n' +
                '👥 **Players:** `Live`\n\n' +
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

            .setImage('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop')

            .setFooter({
                text: 'Originalii Romania • FiveM'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });

    }

});

client.login(TOKEN);