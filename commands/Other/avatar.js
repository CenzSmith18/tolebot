const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    aliases: ["avatar"],
    category: 'Other',
    utilisation: '',

execute(client, message, args) {
    if (!message.mentions.users.size) {
        const embed = new MessageEmbed()
        .setAuthor(`${message.author.tag} Avatar`)
        .setImage(`${message.author.displayAvatarURL({ dynamic: true, size: 2048 })}`)
        .setDescription(`Bengetna Suram`)
        .setTimestamp()
        return message.channel.send(embed);
    }

    const avatarList = message.mentions.users.map(user => {
        const embed2 = new MessageEmbed()
        .setAuthor(`${user.tag} Avatar`)
        .setImage(`${user.displayAvatarURL({ dynamic: true, size: 2048 })}`)
        .setDescription(`Bengetna Suram`)
        .setTimestamp()
        return embed2
    });
    message.channel.send(avatarList)
 } 
}