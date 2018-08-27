
exports.run = (client, message, args) => {
  const { RichEmbed, version } = require('discord.js');
const config = require('../storages/config.json');    
  const rps = ["Rock", "Paper", "Scissors"]
  var random = Math.floor(Math.random()*rps.length);
  const choice = args[0].toLowerCase();
  const mychoice = rps[random];
  const draw = "it's a draw";
  const won = "you won";
  const loss = "you lost";
  var result;
  const emoji_rock = "💎";
  const emoji_scissor = "✂";
  const emoji_paper = "🗞";
  let emoji;
  let my_emoji;
  if (choice === "rock") {
  emoji = emoji_rock;
  }else if (choice === "scissors") {
  emoji = emoji_scissor;
  }else if (choice === "paper") {
  emoji = emoji_paper;
  }else {
  emoji = "❔";
  }
  if (mychoice === "Rock") {
  my_emoji = emoji_rock;
  }else if (mychoice === "Scissors") {
  my_emoji = emoji_scissor;
  }else if (mychoice === "Paper") {
  my_emoji = emoji_paper;
  }
  if (choice === mychoice.toLowerCase()) {
  result = draw;
  }else if (choice === "rock" && mychoice === "Scissors") {
  result = won;
  }else if (choice === "rock" && mychoice === "Paper") {
  result = loss;
  }else if (choice === "scissors" && mychoice === "Paper") {
  result = won;
  }else if (choice === "scissors" && mychoice === "Rock") {
  result = loss;
  }else if (choice === "paper" && mychoice === "Rock") {
  result = won;
  }else if (choice === "paper" && mychoice === "Scissors") {
  result = loss;
  }else {
  result = ` ${args[0]} is not a vaild usage.`;
  }
    var embed = new RichEmbed()
    .setColor('Random')
    .setDescription(`I choose ${mychoice} | You choose  ${args[0]} ${result}!`);
  return message.channel.send({embed});
        
};

exports.config = {
    command: 'rps',
    aliases: [],
    plevel: "User",
    description: "rps with the bot",
    usage: "rps <rps>",
    category: "ヅ General ヅ"
};

exports.extra = {
    hidden: false
};