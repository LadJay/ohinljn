const Discord = require("discord.js");
const { Client, Util , RichEmbed} = require('discord.js');
const client = new Client({ disableEveryone: true });
const DBL = require('dblapi.js');
const express = require('express');
const http = require('http');
const cookies = require("cookiesdb")
const app = express();

 const server = http.createServer(app);
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzMTUzMzkzMDI4NjQxNTg5MyIsImJvdCI6dHJ1ZSwiaWF0IjoxNTMzODExNzIwfQ.DiWIMigckd4AfFDFB5HcDe9bEiV6qE67FrnPf3hgV4M', { webhookAuth: 'test', webhookServer: server });

dbl.webhook.on('ready', hook => {
  console.log(`Webhook running with path ${hook.path}`);
});
dbl.webhook.on('vote', vote => {
    console.log(vote)
client.channels.get("476158627791634433").send(`<@${vote.user}> Just Voted ! Thank You \n **Rewards** \n 300 Pengu Coins! \n Vote this bot again in 12 Hours! \n Link __https://discordbots.org/bot/431533930286415893/vote__`)
  return cookies.updateCookies(vote.user, 300)
    
});



app.get("/", (request, response) => {
  response.sendStatus(200);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

server.listen(process.env.PORT, () => {
  console.log('Listening');
});


                    


client.on('message', message => {
const db = require('quick.db');
  
})
const activities = require('./src/storages/activites.json');

const config = require(`${process.cwd()}/Masteradvanced/src/storages/config.json`);
client.permconfig = require(`${process.cwd()}/Masteradvanced/src/storages/permlevelhandler.js`);
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
//const talkedRecently = new Set();
client.on('ready', () => {
	console.log(`[READY] Logged in as ${client.user.tag}! (${client.user.id})`);
	client.setInterval(() => {
		const activity = activities[Math.floor(Math.random() * activities.length)];
		client.user.setActivity(activity.text, { type: activity.type });
	}, 60000);
});
const SQLite = require("better-sqlite3");
const sql = new SQLite('./scores.sqlite');

client.on("ready", () => {
  console.log('ONline')
  const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
    // If the table isn't there, create it and setup the database correctly.
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
    // Ensure that the "id" row is always unique and indexed.
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }
   


  // And then we have two prepared statements to get and set the score data.
  client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
  client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
   
})

          
client.on("message", message => {
  if (message.author.bot) return;
  let score;
  if (message.guild) {
    score = client.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    client.setScore.run(score);
  }
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

if(command === 'serveradd') {
              if(message.guild.id === '440840211400884224') return message.channel.send(`Server economy are blocked from this server!`)
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You must have `ADMINISTRATOR` Perms!");

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

  return message.channel.send(`Added ${pointsToAdd} :yen: Credits to ${user.tag}! \n New Balance: ${userscore.points} :yen: Credits`);
}
if(command === 'serverremove') {
              if(message.guild.id === '440840211400884224') return message.channel.send(`Server economy are blocked from this server!`)

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You must have `ADMINISTRATOR` Perms!");

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
  userscore.points -= pointsToAdd;

  // We also want to update their level (but we won't notify them if it changes)
  let userLevel = Math.floor(0.1 * Math.sqrt(score.points));
  userscore.level = userLevel;

  // And we save it!
  client.setScore.run(userscore);

  return message.channel.send(`Removed ${pointsToAdd} :yen: Credits from ${user.tag}! \n New Balance: ${userscore.points} :yen: Credits`);


}
})
client.on("guildCreate", (guild) => {

    console.log(client.user.username + " Added to " + guild.name);
  client.channels.get('477996279679549470').send(client.user.username + " Was Added To " + guild.name + "With "+ guild.memberCount + "Members.")
});



client.on('ready', () => {
	console.log('ready!');
const Discord = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAzyu3pSnJ4zXYTJ3CsFmJBY0aoxiKfgCM");
const queue = new Map();
  let prefix = "+"
  var servers = {};
client.on("message", async message => {
    var args = message.content.substring(prefix.length).split(" ");
    if (!message.content.startsWith(prefix)) return;
  var searchString = args.slice(1).join(' ');
	var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	var serverQueue = queue.get(message.guild.id);
    switch (args[0].toLowerCase()) {
      case "play":
    var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		var permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			var playlist = await youtube.getPlaylist(url);
			var videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				var video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					var index = 0;
            const { RichEmbed, version } = require('discord.js');
	                              var embed = new RichEmbed()
                                 .setColor("RANDOM")
                                 .addField(`__I have searched the input you gave me and found the results..__` , `**${videos.map(video2 => `${++index} |  ${video2.title}`).join('\n')}**`)
                                 .setFooter(`Please Type a number between 1-10 , Command requested by : ${message.author.username}`)
                                 .setColor("RANDOM")
                                
message.channel.send({embed})   
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 20000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('It seems to be no one using the search system.. cancelling');
					}
					var videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('ERROR : Please Search A Different Song | ERROR: NO SONGS FOUND.');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
        break;
      case "skip":
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("NO ID FOUND IN DATABASE | CONSOLE TEXT : [DATABASE] : FAILED TO GENERATE USERID TO CONFIG.JSON");
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("NO ID FOUND IN DATABASE | CONSOLE TEXT : [DATABASE] : FAILED TO GENERATE USERID TO CONFIG.JSON");
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('No Songs to skip... :joy:');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
        break;
           case "stop":
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
break;
      case "volume":
        if (message.author.id == "200598766804271104") { 
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('Cant Change volume when there is nothing playing.');
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
        }
break;
      case "current":
		if (!serverQueue) return message.channel.send('No Songs Playing At the moment.');
		return message.channel.send(`?? Now playing: **${serverQueue.songs[0].title}**`);
break;
      case "queue":
		if (!serverQueue) return message.channel.send('There is no active songs queued in this server.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
break;
      case "pause":
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send(' Paused Music :)');
		}
		return message.channel.send('There is no music to pause :joy:');
break;
      case "resume":
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('Resumed Music :) !');
		}
		return message.channel.send('There is no music to resume :joy:');
	

	return undefined;
break;
}
async function handleVideo(video, message, voiceChannel, playlist = true) {
	var serverQueue = queue.get(message.guild.id);
	console.log(video);
	var song = {
		id: video.id,
		title: video.title,
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		var queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(` **${song.title}** has been added to the queue!`);
	}
	return undefined;
}
  function play(guild, song) {
	var serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
      message.channel.send('```Song Has Just Ended..```');
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`?? Start playing: **${song.title}** Requested by : ${message.author}`);
}
})
})
  client.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.find('name', 'staff-logs');
    if (!channel) return;
    else{
    channel.send(`** ${member.user.username} Left The server!**`);
    }
    
  });



const fs = require("fs")

fs.readdir(`${process.cwd()}/Masteradvanced/src/commands/`, (err, files) => {
  if (err) console.error(err);
  
  files.forEach(file => {
    const props = require(`${process.cwd()}/Masteradvanced/src/commands/${file}`);
  
    client.commands.set(props.config.command, props);
     var cmds = require(`./src/commands/${file}`);
    cmds.config.aliases.forEach(alias => {
            client.aliases.set(alias, cmds.config.command);
    })
  });
});


client.levelCache = {};
for (let i = 0; i < client.permconfig.permLevels.length; i++) {
    const thisLevel = client.permconfig.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;

};

client.permlevel = message => {
    let permlvl = 0;

    const permOrder = client.permconfig.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);

    while (permOrder.length) {
        const currentLevel = permOrder.shift();
        if (currentLevel.check(message)) {
            permlvl = currentLevel.level;

            break;
        }
    }
    return permlvl;
};

fs.readdir(`${process.cwd()}/Masteradvanced/src/events/`, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`${process.cwd()}/Masteradvanced/src/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));

    });
});



client.login(process.env.TOKEN);