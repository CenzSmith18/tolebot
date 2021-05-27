const { MessageEmbed } = require('discord.js');

module.exports = (client, message) => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        const embed = new MessageEmbed()
        .setDescription(`**My Prefix**: **\`${client.config.discord.prefix}\`**`)
        message.channel.send(embed)
        .then(message => message.delete({timeout: 3000}))
    };


    if (message.author.bot || message.channel.type === 'dm') return;

    const prefix = client.config.discord.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};