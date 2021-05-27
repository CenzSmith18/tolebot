const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'paehan',
    aliases: [],
    category: 'Moderasi',
    utilisation: '',

 async execute(client, message, args) {
     message.delete();
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!message.member.hasPermission("BAN_MEMBERS")){
        message.channel.send("Kamu tidak memiliki izin untuk menggunakan perintah ini!");
    }

    else{
        if(!member)
            return message.channel.send("Silahkan mention member yang valid dari server ini");
        if(!member.bannable) 
            return message.channel.send("Saya tidak bisa membanned member ini! Apakah mereka memiliki peran yang lebih tinggi? Apakah saya memiliki izin Ban?");

            let reason = args.slice(1).join(' ');
        if(!reason) reason = "Tidak ada alasan";

        member.ban({reason: reason})
            .catch(error => message.channel.send(`Maaf ${message.author} Saya tidak bisa membanned member tersebut`));
            const embed = new MessageEmbed()
            .setAuthor('BANNED')
            .addField('User', `${member.user.tag}(${member.user})`, true)
            .addField('Moderator', `${message.author.tag}`, true)
            .addField('User ID', `${member.user.id}`)
            .addField('Alasan', `${reason}`)
            .setTimestamp()
        message.channel.send(embed);
    }
 }
}