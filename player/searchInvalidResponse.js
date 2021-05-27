const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks, content, collector) => {
    const e1 = new MessageEmbed()
    .setDescription(`⚠ The selection has been **cancelled**!`);
    const e2 = new MessageEmbed()
    .setDescription(`⚠ You must send a valid number between **1** and **${tracks.length}** !`);
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(e1);
    } else message.channel.send(e2);
};