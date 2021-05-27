const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '',

    execute(client, message) {
        const e1 = new MessageEmbed()
        .setDescription(`⚠ Please join the voice channel, and play some song first!`);
        const e2 = new MessageEmbed()
        .setDescription(`⚠ You are not in the same voice channel with Tole!`);
        const e3 = new MessageEmbed()
        .setDescription(`⚠ No music currently playing. Please play some song first!`);

        if (!message.member.voice.channel) return message.channel.send(e1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(e2);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(e3);

        const embed = new MessageEmbed()
        .setDescription((queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | (Requested By: ${track.requestedBy.username})`
        }).slice(0, 10).join('\n') + `\n\n${queue.tracks.length > 10 ? `And **${queue.tracks.length - 10}** Another songs` : `Total **${queue.tracks.length}** Songs`}`))
        .setFooter('Queue', `${client.user.displayAvatarURL({dynamic: true})}`)

        message.channel.send(embed).then(message => {message.delete({timeout: 10000})});
    },
};