const { MessageEmbed } = require("discord.js");

module.exports = (client, error, message) => {
    const e1 = new MessageEmbed()
    .setDescription(`❌ No music playing on this server!`);
    const e2 = new MessageEmbed()
    .setDescription(`❌ You are not connected to any voice channel!`);
    const e3 = new MessageEmbed()
    .setDescription(`
    ❌ I can't join your voice channel. Maybe i've got a connection timeout or i don't have permissions for joining! Please try again.
    `);
    const e4 = new MessageEmbed()
    .setDescription(`❌ Something went wrong ... Error: ${error}`);
    switch (error) {
        case 'NotPlaying':
            message.channel.send(e1);
            break;
        case 'NotConnected':
            message.channel.send(e2);
            break;
        case 'UnableToJoin':
            message.channel.send(e3);
            break;
        default:
            message.channel.send(e4);
    };
};
