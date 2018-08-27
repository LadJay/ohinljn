        exports.run = (client, message, args) => {
	const config = require('../storages/config.json');
  const {Discord , RichEmbed} = require("discord.js")
  
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
              const cookies = require('cookiesdb');
    const moment = require('moment');

  
const fs = require("fs")            
                       
              if(message.guild.id === '440840211400884224') return message.channel.send(`Server economy are blocked from this server!`)

   let today = moment().format('l')
   
    cookies.fetchCookies(`lastDaily_${message.author.id + message.guild.id}`).then(i => {

        if (i.text === today) return message.channel.send(`Error: **Command RateLimited** \n Available: **`+ moment().endOf('day').fromNow() + '.**');

        cookies.updateText(`lastDaily_${message.author.id + message.guild.id}`, today).then(() => {
  if (message.author.bot) return;
  let score;
  if (message.guild) {
    score = client.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    client.setScore.run(score);
  }
var random = Math.floor(Math.random() * 1200 + 1);



  let userscore = client.getScore.get(message.author.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
  }
  userscore.points += random;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;

  // And we save it!
  client.setScore.run(userscore);
    var embed = new RichEmbed()
.setColor('RANDOM')
    .setDescription(`✅  Hello ${message.author.username} Your daily has been collected! \n You have collected a total of **__${random}__ Credits**`)
  return message.channel.send(embed);

        })
    })
        }

exports.config = {
    command: 'spayday',
    aliases: ['sdaily', 'sdailies'],
    plevel: "User",
    description: "Sends you the mentioned users Information",
    usage: "userinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};