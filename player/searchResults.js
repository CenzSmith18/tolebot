const { MessageEmbed } = require("discord.js")

module.exports = (client, message, query, tracks) => {

    const embed = new MessageEmbed()
    .setAuthor(`๐ Looking for: ${query}`)
    
    const embed2 = new MessageEmbed()
    .setAuthor(`Search results for: ${query}`)
    .setFooter('Search result๐', `${client.user.displayAvatarURL({dynamic: true})}`)
    .setDescription(`${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).slice(0, 10).join('\n')}`)
    .addField('โ', 'Type ``cancel`` to cancel.')
    message.channel.send(embed)
    .then((message) => {
        setTimeout(function() {
            message.edit(embed2)
        },3000)
    })
};