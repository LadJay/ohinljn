          exports.run = (client, message, args) => {
	const config = require('../storages/config.json');
  const {Discord , RichEmbed} = require("discord.js")
  
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');
              let score;

if(!message.author.id === message.guild.owner) return message.reply("No permissions! \n This Command Requires (`GUILD_OWNER`)");

  const user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) return message.reply("Please put in a input! \n args[0] Must be a vaild user or id!");

  const pointsToAdd = parseInt(args[1], 10);
  if(!pointsToAdd) return message.reply("Please put in a input! \n args[1] Must be a vaild amount!")

  // Get their current points.
  let userscore = client.getScore.get(user.id, message.guild.id);
  // It's possible to give points to a user we haven't seen, so we need to initiate defaults here too!
  if (!userscore) {
    userscore = { id: `${message.guild.id}-${user.id}`, user: user.id, guild: message.guild.id, points: 0, level: 1 }
  }
  userscore.points += pointsToAdd;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;

  // And we save it!
  client.setScore.run(userscore);

  return message.channel.send(`Removed ${pointsToAdd} :yen: Credits from ${user.tag}! \n New Balance: ${userscore.points} :yen: Credits`);
}
          
           exports.config = {
    command: 'sremove',
    aliases: ['sremove', 'sremove'],
    plevel: "Admin",
    description: "Sends you the mentioned users Information",
    usage: "userinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};