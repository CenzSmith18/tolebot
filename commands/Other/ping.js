const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Other',
    utilisation: '',

 async execute(client, message) {
        const embed = new MessageEmbed()
        .setDescription(`ping?`);
        const embed2 = new MessageEmbed()
        .setDescription(`${message.author} 🏓 Pong! ${client.ws.ping}ms`);
        const sent = await message.channel.send(embed);
        return sent.edit(embed2)
    },
};