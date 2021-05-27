const { MessageEmbed } = require("discord.js");

module.exports = (client, message, queue, playlist) => {
    const e1 = new MessageEmbed()
    .setDescription(`🎶 ${playlist.title} has been added to the queue (**${playlist.tracks.length}** Songs)!`);
    message.channel.send(e1);
};