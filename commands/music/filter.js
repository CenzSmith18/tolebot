const { Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: 'filter',
    aliases: ['f'],
    category: 'Music',
    utilisation: '',

    execute(client, message, args, query) {
        const e1 = new MessageEmbed()
        .setDescription(`⚠ Please join the voice channel, and play some song first!`);
        const e2 = new MessageEmbed()
        .setDescription(`⚠ You are not in the same voice channel with Tole!`);
        const e3 = new MessageEmbed()
        .setDescription(`⚠ No music currently playing. Please play some song first!`);
        const e4 = new MessageEmbed()
        .setDescription(`⚠ Please specify a valid filter to enable or disable!`);
        const e5 = new MessageEmbed()
        .setDescription(`⚠ This filter doesn't exist! (Please use \`t! listfilter/lfilter\` to see all filter list.)`);
        const embed = new MessageEmbed()
        .setDescription(`<a:ld:803274491228061726> Please Wait!`);
        const embed2 = new MessageEmbed()
        .setDescription(`🟢 Filter **Activated**!`);
        const embed3 = new MessageEmbed()
        .setDescription(`<a:ld:803274491228061726> Please Wait!`);
        const embed4 = new MessageEmbed()
        .setDescription(`🔴 Filter **Deactivated**!`);

        if (!message.member.voice.channel) return message.channel.send(e1) .then(message => {message.delete({timeout: 5000})});

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) 
        return message.channel.send(e2) .then(message => {message.delete({timeout: 5000})});

        if (!client.player.getQueue(message)) return message.channel.send(e3) .then(message => {message.delete({timeout: 5000})});

        if (!args[0]) return message.channel.send(e4) .then(message => {message.delete({timeout: 5000})});

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(e5) .then(message => {message.delete({timeout: 5000})});

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(embed)
        .then((message) => {
            setTimeout(function() {
            message.edit(embed2)
            },5000)
            })
        else message.channel.send(embed3)
        .then((message) => {
            setTimeout(function() {
            message.edit(embed4)
            },5000)
            })
    },
};