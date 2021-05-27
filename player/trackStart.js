const { MessageEmbed } = require("discord.js");

module.exports = async (client, message, track) => {
    
    const embed = new MessageEmbed()
    .setTitle(`🎵 Playing`)
    .setDescription(`${track.title}
    
    **Uploaded By:** ${track.author}
    **Duration:** ${track.duration}
       
    **Playing Music On**: ${message.member.voice.channel.name}
    `)
    .setFooter(`Requested by ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true})}`)
    message.channel.send(embed)
};