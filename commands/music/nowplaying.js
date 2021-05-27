const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '',

    execute(client, message) {
        const embed1 = new MessageEmbed()
        .setDescription("⚠ Please join the voice channel . and play some song first!");
        const embed2 = new MessageEmbed()
        .setDescription("⚠ You are not in the same voice channel with Tole!");
        const embed3 = new MessageEmbed()
        .setDescription("⚠ No music currently playing. Please play some song first!");
        if (!message.member.voice.channel) return message.channel.send(embed1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(embed2);

        if (!client.player.getQueue(message)) return message.channel.send(embed3);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {               
                author: { name: track.title },
                footer: { text: 'Now Playing', url: `${client.user.displayAvatarURL({dynamic: true})}` },
                fields: [
                    { name: 'Channel', value: track.author, inline: true },
                    { name: 'Requested by', value: track.requestedBy.username, inline: true },
                    { name: 'From Playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Duration', value: track.duration, inline: true },
                    { name: 'Volume', value: client.player.getQueue(message).volume, inline: true },
                    
                    { name: 'Repeat Mode', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Paused', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Progress', value: client.player.createProgressBar(message, { timecodes: true }), inline: false }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};