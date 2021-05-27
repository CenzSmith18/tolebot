const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const e1 = new MessageEmbed()
    .setDescription(`⛔ Music stopped because there were no more songs in the queue!`);
    message.channel.send(e1);
};