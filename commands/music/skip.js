const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'skip',
    aliases: ['s'],
    category: 'Music',
    utilisation: '',

    execute(client, message) {
        const embed = new MessageEmbed()
        .setDescription("⚠ Please join the voice channel. and play some song first!");
        const embed2 = new MessageEmbed()
        .setDescription("⚠ You are not in the same voice channel with Tole!");
        const embed3 = new MessageEmbed()
        .setDescription("⚠ No music currently playing. Please play some song first!");
        const embed4 = new MessageEmbed()
        .setDescription("Song **Skipped** 👍");
        if (!message.member.voice.channel) return message.channel.send(embed).then(message => {message.delete({timeout: 5000})});

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(embed2).then(message => {message.delete({timeout: 5000})});

        if (!client.player.getQueue(message)) return message.channel.send(embed3).then(message => {message.delete({timeout: 5000})});

        client.player.skip(message);
        
        message.channel.send(embed4).then(message => {message.delete({timeout: 5000})});
    },
};