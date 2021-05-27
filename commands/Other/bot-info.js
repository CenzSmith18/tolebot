const { MessageEmbed } = require("discord.js");
const { version } = require("discord.js");

module.exports = {
    name: 'info',
    aliases: ['stats'],
    category: 'Other',
    utilisation: '',

    async execute(client, message ) {
       
      const seconds = Math.floor(client.uptime / 1000) % 60 ;
      const minutes = Math.floor((client.uptime / (1000 * 60)) % 60);
      const hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 24);
      const days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 7);
      const uptime = [`${days} Days`,
        `${hours} Hours`,
        `${minutes} Minutes`,
        `${seconds} Seconds`].filter((time) => !time.startsWith("0")).join(", ");

        const owner = client.users.fetch('450653329555587073');

    const embed = new MessageEmbed()
    .setTitle('Tole Stats')
    .setAuthor(client.user.tag, client.user.displayAvatarURL({ size: 64}))
    .addField('Technical',`
    \`\`\`js
   Discord.js: v${version}
   Node.js: ${process.version}
   Uptime: ${uptime}
   Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
   Total Memory Usage: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} MB\`\`\`
    `,true)
    .addField('Misc',`
    \`\`\`js
   Servers: ${client.guilds.cache.size}
   Users: ${client.users.cache.size}
   Channels: ${client.channels.cache.size}\`\`\`
    `,true)
    .addField('About Tole', '([Invite](https://discord.com/api/oauth2/authorize?client_id=768132941862666331&permissions=2147482871&scope=bot), [Server](https://discord.gg/GuNQbDpG7E), [Vote](https://top.gg/bot/768132941862666331/vote))')
    .setFooter(`🌐From ${owner.tag}`, owner.user.displayAvatarURL({ dynamic: true }));

    message.channel.send(embed)
    }
};