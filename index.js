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

            // LOGO SERVER
            .setThumbnail('https://i.imgur.com/1X4JQ9x.png')

            // BANNER SERVER
            .setImage('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop')

            .setFooter({
                text: 'Originalii Romania • FiveM',
                iconURL: 'https://i.imgur.com/1X4JQ9x.png'
            })

            .setTimestamp();

        message.channel.send({ embeds: [embed] });

    } catch (err) {

        message.channel.send('❌ Server offline.');

    }
}