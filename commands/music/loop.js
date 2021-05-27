const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    category: 'Music',
    utilisation: '',

    execute(client, message, args) {
        const e1 = new MessageEmbed()
        .setDescription("⚠ Please join the voice channel, and play some song first!");
        const e2 = new MessageEmbed()
        .setDescription("⚠ You are not in the same voice channel with Tole!");
        const e3 = new MessageEmbed()
        .setDescription("⚠ No music currently playing. Please play some song first!");
        const c1 = new MessageEmbed()
        .setDescription("🚫 Loop **disabled**!");
        const c2 = new MessageEmbed()
        .setDescription("🔁 Loop **enabled** the whole queue will be looped!");
        const c3 = new MessageEmbed()
        .setDescription("🚫 Repeat **disabled**!");
        const c4 = new MessageEmbed()
        .setDescription("🔂 Repeat **enabled** the current music will be repeated!");
        if (!message.member.voice.channel) return message.channel.send(e1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(e2);

        if (!client.player.getQueue(message)) return message.channel.send(e3);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(c1);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(c2);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(c3);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(c4);
            };
        };
    },
};