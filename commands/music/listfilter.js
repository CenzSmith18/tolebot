const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'listfilter',
    aliases: ['lfilter'],
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

        if (!client.player.getQueue(message)) return message.channel.send(e3);

        const filtersStatuses = [[], []];

        client.filters.forEach((filterName) => {
            const array = filtersStatuses[0].length > filtersStatuses[1].length ? filtersStatuses[1] : filtersStatuses[0];
            array.push(filterName.charAt(0).toUpperCase() + filterName.slice(1) + " : " + (client.player.getQueue(message).filters[filterName] ? client.emotes.success : client.emotes.off));
        });
        const embed = new MessageEmbed()
        .setDescription(`List of all filters that are enabled or disabled.`)
        .addField('Filter', filtersStatuses[0].join('\n'), true)
        .addField('** **', filtersStatuses[1].join('\n'), true)
        .setFooter('lfilter', `${client.user.displayAvatarURL({dynamic: true})}`)
        .setTimestamp()
        message.channel.send(embed).then(message => {message.delete({timeout: 10000})});
    },
};