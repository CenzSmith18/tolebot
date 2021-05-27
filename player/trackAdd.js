const { MessageEmbed } = require('discord.js')

module.exports = (client, message, queue, track) => {

    const embed = new MessageEmbed()
    .setTitle(`🎶 has been added to the queue `)
    .setDescription(`${track.title}
    
    **Uploaded By:** ${track.author}
    **Duration:** ${track.duration}
    
    This song is in the queue **#${queue.tracks.length}**
    `)
    .setFooter(`Requested By ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true})}`)
    message.channel.send(embed);
};