        exports.run = (client, message, args) => {
	const config = require('../storages/config.json');
  const {Discord , RichEmbed} = require("discord.js")
              if(message.guild.id === '440840211400884224') return message.channel.send(`Server economy are blocked from this server!`)

const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

const top10 = sql.prepare("SELECT * FROM scores WHERE guild = ? ORDER BY points DESC LIMIT 7;").all(message.guild.id);
  const embed = new RichEmbed()
    .setColor('RANDOM')
  .setFooter('Top 7 Leaderboard (Guild Richest Credits)')
  .setTimestamp()
  for(const data of top10) {
    embed.addField(` ━━━━━━━━━━━━━━━━━━━━━━`, `Username: [${client.users.get(data.user).tag}](https://discord.gg/eyFYz2s)(${client.users.get(data.user).id}) \n :yen:Credits: [${data.points}](https://discord.gg/eyFYz2s)`);
  }
  return message.channel.send({embed});
        }
               exports.config = {
    command: 'slb',
    aliases: ['sleaderboard', 'richest' , 'leaderboard'],
    plevel: "User",
    description: "Sends you the mentioned users Information",
    usage: "userinfo",
    category: "Information"
};

exports.extra = {
    hidden: false
};