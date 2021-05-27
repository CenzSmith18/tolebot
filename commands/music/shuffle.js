const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        const a1 = new MessageEmbed()
        .setDescription("⚠ Please join the voice channel . and play some song first!");
        const a2 = new MessageEmbed()
        .setDescription("⚠ You are not in the same voice channel with Tole!");
        const a3 = new MessageEmbed()
        .setDescription("⚠ No music currently playing. Please play some song first!");
        const a4 = new MessageEmbed()
        .setDescription(`🔀 Queue shuffled **${client.player.getQueue(message).tracks.length}** songs!`);
        if (!message.member.voice.channel) return message.channel.send(a1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(a2);

        if (!client.player.getQueue(message)) return message.channel.send(a3);

        client.player.shuffle(message);

        return message.channel.send(a4).then(message => {message.delete({timeout: 5000})});
    },
};