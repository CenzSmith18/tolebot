const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'clearchat',
    aliases: ['cc'],
    category: 'Other',
    utilisation: '',

 async execute(client, message, args) {
     const e1 = new MessageEmbed()
     .setDescription(`⚠ You don't have permission to use this command!`);
     const e2 = new MessageEmbed()
     .setDescription(`⚠ Provide a number between 2 and 100 for the number of messages to be deleted`);
     const e3 = new MessageEmbed()
     .setDescription(`‼ Unable to delete message because: DiscordAPIError: You can only bulk delete messages that are under 14 days old.`);
     const e4 = new MessageEmbed()
     .setDescription(`✅ Message Deleted!`);

    const deleteCount = parseInt(args[0], 10);

    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.send(e1);
    }
    else {
        if(!deleteCount || deleteCount < 2 || deleteCount > 100){
            return message.channel.send(e2);
        }

        await message.channel.bulkDelete(deleteCount)
        .catch(error => message.reply(e3))

        message.channel.send(e4) .then(message => message.delete({timeout: 5000}))
    }
    }
}