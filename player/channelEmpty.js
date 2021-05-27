const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue) => {
    const e1 = new MessageEmbed()
    .setDescription(`⛔ Music has stopped because there were no more members on the voice channel!`);
    message.channel.send(e1);
};