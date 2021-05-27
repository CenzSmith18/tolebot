const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'serverinfo',
    aliases: ['sinfo'],
    category: 'Other',
    utilisation: '',

    execute(client, message, args) {

        verificationLevels = {
            "NONE": "None",
            "LOW": "Low",
            "MEDIUM": "Medium",
            "HIGH": "High",
            "VERY_HIGH": "Very High"
          };
          filterLevels = {
            "DISABLED": "Off",
            "MEMBERS_WITHOUT_ROLES": "No Role",
            "ALL_MEMBERS": "Everyone"
          };

        function checkBots(guild) {
            let botCount = 0;
            guild.members.cache.forEach(member => {
                if(member.user.bot) botCount++;
            });
            return botCount;
        }
        
        function checkMembers(guild) {
            let memberCount = 0;
            guild.members.cache.forEach(member => {
                if(!member.user.bot) memberCount++;
            });
            return memberCount;
        }
    
        function checkOnlineUsers(guild) {
            let onlineCount = 0;
            guild.members.cache.forEach(member => {
                if(member.user.presence.status === "online")
                    onlineCount++; 
            });
            return onlineCount;
        }
        const days = Math.floor((new Date() - message.guild.createdAt) / (1000 * 60 * 60 * 24));
        let sicon = message.guild.iconURL();
        let embed = new MessageEmbed()
            .setAuthor(`Server Info`, message.guild.iconURL())
            .addField("Server Name:", message.guild.name, true)
            .addField('Server Owner:', message.guild.owner ? message.guild.owner.user.tag : "Gagal mendapatkan informasi pemilik.", true)
            .addField('Region Server:', message.guild.region, true)
            .setThumbnail(sicon)            
            .addField('Verification Level:', verificationLevels[message.guild.verificationLevel] , true)
            .addField("Explicit Filter", filterLevels[message.guild.explicitContentFilter], true)
            .addField('number of channels:', message.guild.channels.cache.size, true)
            .addField('Created At:', `\`\`\`css\n${message.guild.createdAt.toDateString()} (${days} days ago!)\`\`\``, true)
            .addField('MemberCount:', `
            \`\`\`css\nTotal: ${message.guild.memberCount} | User: ${checkMembers(message.guild)} | Online: ${checkOnlineUsers(message.guild)} | Bot: ${checkBots(message.guild)}\`\`\``)
            .setFooter('Tole', `${client.user.displayAvatarURL({dynamic: true})}`)
            .setTimestamp()
    
        return message.channel.send(embed);
    }
}