const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    category: 'Music',
    utilisation: '',

    execute(client, message, args) {
        const e1 = new MessageEmbed()
        .setDescription(`⚠ Please join the voice channel, and play some song first!`);
        const e2 = new MessageEmbed()
        .setDescription(`⚠ You are not in the same voice channel with Tole!`);
        const e3 = new MessageEmbed()
        .setDescription(`⚠ No music currently playing. Please play some song first!`);
        const e4 = new MessageEmbed()
        .setDescription(`⚠ Please enter a valid number!`);
        const e5 = new MessageEmbed()
        .setDescription(`⚠ Please enter a valid number (1 - 100)!`);
        const e6 = new MessageEmbed()
        .setDescription(`🔊 Volume has been set to: **${parseInt(args[0])}%**!`);

        if (!message.member.voice.channel) return message.channel.send(e1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(e2);

        if (!client.player.getQueue(message)) return message.channel.send(e3);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(e4);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) 
        return message.channel.send(e5);

        client.player.setVolume(message, parseInt(args[0]));

        message.channel.send(e6).then(message => {message.delete({timeout: 5000})});
    },
};