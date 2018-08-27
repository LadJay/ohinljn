          exports.run = (client, message, args) => {
	const config = require('../storages/config.json');
  const {Discord , RichEmbed} = require("discord.js")
  
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
              const cookie = require('cookiesdb');
    const moment = require('moment');
if (message.author.bot) return;
  let score;
            if(message.guild.id === '440840211400884224') return message.channel.send(`Server economy are blocked from this server!`)
               let user = message.mentions.users.first() || message.author;

  if (message.guild) {
    score = client.getScore.get(user.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    client.setScore.run(score);
  message.channel.send(`Username: ${user.tag} \n :yen: Credits: ${score.points}`)
  }
          }
            exports.config = {
    command: 'scoins',
    aliases: ['sbal', 'sbalance' , 'scredits' , 'scredit'],
    plevel: "User",
    description: "Sends you the mentioned users Information",
    usage: "userinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};