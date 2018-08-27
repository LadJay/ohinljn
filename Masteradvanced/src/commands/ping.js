  const { RichEmbed, version } = require('discord.js');
    const config = require('../storages/config.json');    
  
module.exports.run = async (client, message, args) => { // Command Handler Module Code
const m = await message.channel.send("<a:tickg:473984512708050945> Generated Stats...");

let E = new RichEmbed() // Start of embed
.setColor("RANDOM")
.addField("Latency", `${m.createdTimestamp - message.createdTimestamp}ms`) // Shows Latency
.addField("API Latency", `${Math.round(client.ping)}ms`) // Shows API Latency

message.channel.send(E) // Sending the embed

  }

                                              
exports.config = {
    command: 'ping',
    aliases: ['pong'],
    plevel: "User",
    description: "Checks the API Latency for Discord!",
    usage: "ping",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};