exports.run = (client, message) => {

    var cookies = require('cookiesdb')
    const moment = require('moment')
    require('moment-duration-format')
              if(message.guild.id === '440840211400884224') return message.channel.send(`Server economy are blocked from this server!`)

                cookies.updateCookies(message.author.id, -15)

   var msg = ['You have paid for a rod and castings for $20.\nYou have caught a Rare Seabass! Which Sold For $','You have paid for a rod and castings for $20.\nYou have caught a Rare Octupus! Which Sold for $']

    var msgrandom = msg[Math.floor(Math.random() * msg.length)];

    let today = moment().format('LT')

    let px = moment().add('1', 'minute').format('LT')

    cookies.fetchCookies(`ree_${message.author.id + message.guild.id}`).then(i => {

        if (i.text === today) return message.channel.send('Error: You are currently command ratelimited! \n Please wait a minute')

        cookies.updateText(`ree_${message.author.id + message.guild.id}`, today).then(() => {


          

const { randomRange } = require('../../util/Util');
          const fishes = require('../../assets/json/crime.json');



    let px = moment().add('1', 'minute').format('LT')
    const { RichEmbed } = require('discord.js')
	const fishID = Math.floor(Math.random() * 10) + 1;
		let rarity;
		if (fishID < 5) rarity = 'caught';
		else if (fishID < 8) rarity = 'escaped';
		else if (fishID < 10) rarity = 'jackpot';
          		else rarity = 'ultra';

          		const fish = fishes[rarity];

	          		const worth = randomRange(fish.min, fish.max);

    var embed = new RichEmbed()

    .setColor('RANDOM')

message.channel.send(`${fish.symbol} **${worth}** Coins`)
                                                                                                                                                      
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
  userscore.points += worth;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;

  // And we save it!
  client.setScore.run(userscore);        })
    })
}

                                                                               

exports.config = {
    command: 'scrime',
    aliases: [],
    plevel: "User",
    description: "Catch your own fish!",
    usage: "fish",
    category: "Currency"
};

exports.extra = {
    hidden: false
};