const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    aliases: ['menu'],
    category: 'Other',
    utilisation: '',

    execute(client, message, args) {
    const embed = new MessageEmbed()
    .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL())
    .setTitle('Help Command')
    .setDescription('List Of All Commands')
    .addField('Main', `
    \`play/p\`,\`skip/s\`,\`stop/st\`,\`pause/ps\`,\`resume/rs\`,\`nowplaying/np\`,\`queue/q\`,\`repeat\`,
    \`loop\`,\`shuffle/sh\`,\`search/src\`,\`listfilter/lfilter\`,\`volume/vol\`

    **Filter**: ${client.filters.map((x) => '`' + x + '`').join(', ')}

    **Example**: t!play <title/url> | t!filter <filter>
    `)
    .addField('Others', `
    \`avatar\`,\`stats\`,\`userinfo/uinfo\`,\`serverinfo/sinfo\`,\`clearchat/cc\`,\`ping\`
    `)
    .addField('About Tole', `
    ([Invite](https://discord.com/api/oauth2/authorize?client_id=768132941862666331&permissions=2147482871&scope=bot), [Server](https://discord.gg/GuNQbDpG7E), [Vote](https://top.gg/bot/768132941862666331/vote))
    `)
    .setFooter('Help-Menu', client.user.displayAvatarURL())
    message.channel.send(embed)
    }
};