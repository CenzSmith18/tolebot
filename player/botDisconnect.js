const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const e1 = new MessageEmbed()
    .setDescription(`⛔ Music stopped because I was disconnected from the channel!`);
    message.channel.send(e1);
};