const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query) => {
    const e1 = new MessageEmbed()
    .setDescription(`<a:sad:803655996794208326> No results found on YouTube for ${query}! Please try again.`);
    message.channel.send(e1);
};