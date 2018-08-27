exports.run = (client, message) => {
	if (message.author.bot || message.author === client.user || message.channel.type !== "text") return;
	const cookies = require('cookiesdb');
	const config = require('../storages/config.json');
  var blacklist = require('../storages/blacklist.json');
    if (message.author.bot || message.channel.type !== "text" || message.author === client.user) return; // If the autor is a bot, or the channel is not in guild, or the author is the bot, return.

    const db = require("quick.db")

  if(message.author.id === blacklist.blacklist) return;
   db.fetch(`prefix10_${message.guild.id}`).then(c => {
        var prefix = c;
        
        if (!prefix) { // If c.text a.k.a prefix doesn't exist, prefix will be "!"
            prefix = config.prefix;
        }
    if (!message.content.startsWith(prefix)) return;

  


        if (message.content === `<@${client.user.id}> prefix`) {
        message.channel.send(`This Server prefix is \`\n${prefix}\`\ `)
    }

    const args = message.content.split(' ').slice(1); // Arguments :)
    const command = message.content.split(' ')[0].replace(prefix, ''); // For the Custom Prefix




    const level = client.permlevel(message);

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command)) // Gets either the Bot Name or the Alias

    if (!cmd) return; // If the command typed doesn't exist, return

    if (level < client.levelCache[cmd.config.plevel]) {
            return message.channel.send(`Command Usage Too Low.Your Permission Level is **${level} \n   **This command requires **Level ${client.levelCache[cmd.config.plevel]}**`);
    }

    message.author.permLevel = level;

    message.flags = [];
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }
    cmd.run(client, message, args, level);

})
                                    
}
                                           
