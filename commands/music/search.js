const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'search',
    aliases: ['src'],
    category: 'Music',
    utilisation: '',

    execute(client, message, args) {
        const e1 = new MessageEmbed()
        .setDescription(`⚠ Please join the voice channel, and play some song first!`);
        const e2 = new MessageEmbed()
        .setDescription(`⚠ You are not in the same voice channel with Tole!`);
        const e3 = new MessageEmbed()
        .setDescription(`⚠ No music currently playing. Please play some song first!`);
        
        if (!message.member.voice.channel) return message.channel.send(e1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(e2);

        if (!args[0]) return message.channel.send(e3);

        client.player.play(message, args.join(" "));
    },
};