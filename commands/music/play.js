const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '',

    execute(client, message, args) {
        const embed1 = new MessageEmbed()
        .setDescription("⚠ Please join the voice channel first!");
        const embed2 = new MessageEmbed()
        .setDescription("⚠ You are not in the same voice channel with Tole!");
        const embed3 = new MessageEmbed()
        .setDescription("⚠ Please enter a song title or URL!");
        
        if (!message.member.voice.channel) return message.channel.send(embed1)

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(embed2);

        if (!args[0]) return message.channel.send(embed3);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};