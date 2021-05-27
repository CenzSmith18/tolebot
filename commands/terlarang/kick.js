const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'tajong',
    aliases: [],
    category: 'Moderasi',
    utilisation: '',

 async execute(client, message, args) {
     message.delete()
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!message.member.hasPermission("KICK_MEMBERS")){
        message.channel.send("Kamu tidak memiliki izin untuk menggunakan perintah ini!");
    }
    else{
        
        if(!member)
            //you have to type !kick then @username#1234 as an example
            return message.channel.send("Silahkan mention member yang valid dari server ini");
        if(!member.kickable) 
            return message.channel.send("Saya tidak bisa mengkick member ini! Apakah mereka memiliki role yang lebih tinggi? Apakah saya memiliki izin KICK?");

        // slice(1) removes the first part, which here should be the user mention or ID
        // join(' ') takes all the various parts to make it a single string.
        let reason = args.slice(1).join(' ');
        if(!reason) 
            reason = "Tidak ada alasan";
        member.kick(reason)
            .catch(error => message.channel.send(`Maaf ${message.author} Saya tidak bisa mengkick member tersebut : ${error}`));

            const embed = new MessageEmbed()
            .setAuthor('KICK')
            .addField('User', `${member.user.tag}(${member.user})`, true)
            .addField('Moderator', `${message.author.tag}`, true)
            .addField('User ID', `${member.user.id}`)
            .addField('Alasan', `${reason}`)
            .setTimestamp()
            message.channel.send(embed);
    }

 } 
}