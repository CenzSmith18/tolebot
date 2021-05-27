const { MessageEmbed } = require("discord.js");

module.exports = (client, message, query, tracks) => {
    const e1 = new MessageEmbed()
    .setDescription(`⚠ You did not give a valid response... Please enter the command again!`);
    message.channel.send(e1);
};