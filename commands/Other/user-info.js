const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    aliases: ['uinfo'],
    category: 'Other',
    utilisation: '',

    execute(client, message, args) {
        const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    const embed = new MessageEmbed()
      .setAuthor(`User Info`, user.displayAvatarURL())
      .setThumbnail(user.displayAvatarURL({dynamic: true}))
      .addField('User:', `${user.username}`, true)
      .addField('Discriminator:', `${user.discriminator}`, true)
      .addField('User Id:', `${user.id}`, true)
      .addField('Nickname:', `${member.nickname}`, true)
      .addField('Bot:', `${user.bot}`, true)
      .addField('Joined To Server:', new Date(member.joinedTimestamp).toLocaleDateString())
      .addField('Joined To Discord:', new Date(user.createdTimestamp).toLocaleDateString())
      .addField('Roles:', member.roles.cache.size - 1, true)
      .setTimestamp()

    message.channel.send(embed)
    } 
}