const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clearqueue',
    aliases: ['clear'],
    category: 'Music',
    utilisation: '',

    execute(client, message) {
        const e1 = new MessageEmbed()
        .setDescription(`⚠ Please join the voice channel, and play some song first!`);
        const e2 = new MessageEmbed()
        .setDescription(`⚠ You are not in the same voice channel with Tole!`);
        const e3 = new MessageEmbed()
        .setDescription(`⚠ No music currently playing. Please play some song first!`);
        const e4 = new MessageEmbed()
        .setDescription(`⚠ There is only one song in the queue.`);
        const e5 = new MessageEmbed()
        .setDescription(`🗑 The queue has been **removed**!`);

        if (!message.member.voice.channel) return message.channel.send(e1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(e2);

        if (!client.player.getQueue(message)) return message.channel.send(e3);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(e4);

        client.player.clearQueue(message);

        message.channel.send(e5).then(message => {message.delete({timeout: 5000})});
    },
};