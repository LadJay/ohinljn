exports.run = (client, message, args) => {
    const cookies = require('cookiesdb');
    const config = require('../storages/config.json');
    const { RichEmbed, version } = require('discord.js');

  
const fs = require("fs")
        const embed = new RichEmbed()
            .setColor(0xffff84)
            .setTitle('Help Categories ! Choose a number from 1-6!')
      .setDescription(`**1|** Economy Commands <a:yellow:473603217209688065> Stable \n **2|**Utility Commands <a:green:473603173592858634> Operational\n **3|**Music Commands <a:green:473603173592858634> Operational \n **4|**Moderation Commands <a:green:473603173592858634> Operational \n **5|**Information Commands <a:green:473603173592858634> Operational \n**6|**Server Economy Commands <a:green:473603173592858634> Operational\n TYPE: __+help <number>__`)

            

        if (!args[0]) {
            return message.channel.send(embed)
        }
  if(args[0] === '1') {
      var embed1 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle("Help Economy Commands | Status : <a:yellow:473603217209688065> Stable | Prefix : +")
      .setDescription(`<a:green:473603173592858634> **+search** - Searches through your messages *Usage : +search*. \n <a:green:473603173592858634> **+badges** - Views Badge Shop *Usage : +badges*. \n <a:green:473603173592858634> **+bbuy** - Buy a badge in the shop *Usage : +bbuy <badge_name>*. \n <a:green:473603173592858634> **+daily** - Collect User Daily *Usage : +daily <user>*. \n <a:green:473603173592858634> **+slots** - Gamble Your Pengu Coins! *Usage : +slots <amount>*. \n <a:green:473603173592858634> **+bal** - Views Peoples Balances or Authors With Image *Usage : +bal <user>*. \n<a:green:473603173592858634> **+fish** - Catch a fish! *Usage : +fish* \n <a:green:473603173592858634>**+market** - View Whats in the default item shop! *Usage: +market* \n <a:green:473603173592858634> **+rep** - Give someone a rep point! *Usage: +rep <user>*\n <a:green:473603173592858634> **+transfer** - Transfer Coins To A user 25% Tax! *Usage: +transfer <user> <amount>*\n <a:green:473603173592858634> **+work** - Work To gain credits! *Usage: +work* \n <a:green:473603173592858634> **+workstats** - View Your Workstats! *Usage: +workstats* \n <a:yellow:473603217209688065> **+buy** - Buy a item from the shop! *Usage: +buy <item_name>* \n <a:yellow:473603217209688065> Commands Are Stable`)
return message.channel.send(embed1)

  }else{
      if(args[0] === '2') {
      var embed2 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle("Help Utility Commands | <a:yellow:473603217209688065> Stable Operational | Prefix : +")
      .setDescription(`<a:green:473603173592858634> **+fight** - Fight a user for 200 Coins *Usage : +fight <user>*. \n <a:green:473603173592858634> **+8ball** - ask the 8ball a magical question! *Usage : +8ball <question>*. \n<a:green:473603173592858634> **+ascii** - Make 3d text *Usage : +ascii <text>* \n <a:green:473603173592858634>**+ping** - checks ping in ms *Usage: +ping* \n <a:green:473603173592858634> **+rps** - play rock paper scissors *Usage: +rps <usage>* \n <a:green:473603173592858634> Commands Are Operating`)
return message.channel.send(embed2)

    }else{
      if(args[0] === '3') {
      var embed3 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle("Help Music Commands | Status : <a:green:473603173592858634> Operational | Prefix : +")
      .setDescription(`<a:green:473603173592858634> **+play** - Play a song of your choice! *Usage : +play <search_link>*. \n<a:green:473603173592858634> **+pause** -  Please the Music! *Usage : +pause* \n <a:green:473603173592858634>**+resume** - resumes the music!*Usage: +resume* \n <a:green:473603173592858634> **+queue** -  views the queue of list of music *Usage: +queue* \n <a:green:473603173592858634> **+stop** - bot disconnects from VC *Usage : +stop*. \n<a:green:473603173592858634> **+skip** - skips a song and plays next in queue *Usage : +skip*. \n <a:green:473603173592858634> Commands Are Operating`)
return message.channel.send(embed3)

    
   
   
    
       }else{
      if(args[0] === '4') {
      var embed4 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle("Help Moderation Commands | Status : <a:green:473603173592858634> Operational | Prefix : +")
      .setDescription(`<a:green:473603173592858634> **+serverlogs** Checks Audit logs or kicks , ban *Usage : +serverlogs*.\n<a:green:473603173592858634> **+removerole** - remove a role from a user *Usage : +removerole <user> <role_name>*.\n<a:green:473603173592858634> **+prefix** - Change the prefix of the bot *Usage : +prefix <your_prefix>*.\n<a:green:473603173592858634> **+createrole** - Creates a role and makes it a color of hex *Usage : +createrole <role_name> <hex_code>*.\n<a:green:473603173592858634> **+softban** - Deletes user msgs 7 days chat *Usage : +softban <user> <reason>*. \n<a:green:473603173592858634> **+clear** - Deletes Messages *Usage : +clear <amount_do_not_exceed_99>*. \n<a:green:473603173592858634> **+kick** -  Kick a user *Usage : +kick <user> <reason>* \n <a:green:473603173592858634>**+ban** - Ban a user*Usage: +ban <user> <reason>* \n <a:green:473603173592858634> **+mute** -  Mute a user *Usage: +mute <user> <time> <reason>* \n <a:green:473603173592858634> **+warn** - Warn a user *Usage : +warn <user> <reason>*. \n<a:green:473603173592858634> **+welcome** - set your own welcome *Usage: +welcome <#channel> <true_false> <text>*. \n <a:green:473603173592858634> Commands Are Operating`)
return message.channel.send(embed4)

    
   
   
           }else{


             if(args[0] === '5') {
      var embed5 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle("Help Information Commands | Status : <a:green:473603173592858634> Operational | Prefix : +")
      .setDescription(`<a:green:473603173592858634> **+roleinfo** - View role Details *Usage : +roleinfo <role>*. \n<a:green:473603173592858634> **+rank** - Checks your rank (global) *Usage : +rank*. \n<a:green:473603173592858634> **+invite** - View Invite Details *Usage : +invite*. \n <a:green:473603173592858634> **+support** - View support Details *Usage : +support*. \n <a:green:473603173592858634> **+help** - View Help Details *Usage : +help*. \n<a:green:473603173592858634> **+userinfo** -  Fetches User Information *Usage : +userinfo <user>* \n <a:green:473603173592858634>**+serverinfo** - Views server information *Usage: +serverinfo* \n <a:green:473603173592858634> **+botinfo** - Fetches Bot Information *Usage: +botinfo* \n <a:green:473603173592858634> **+profile** - Fetches User Stats Rep  *Usage : +profile <user>*. \n <a:green:473603173592858634> Commands Are Operating`)
return message.channel.send(embed5)

             }else{
                  if(args[0] === '6') {
      var embed5 = new RichEmbed()
  .setColor("RANDOM")
      .setTitle("Help Server Economy Commands | Status : <a:green:473603173592858634> Operational | Prefix : +")
      .setDescription(`<a:green:473603173592858634> **+sbalance** - View Server Balance  *Usage : +sbalance*. \n<a:green:473603173592858634> **+sdaily** - Collects Daily Cash *Usage : +sdaily*. \n<a:green:473603173592858634> **+serveradd** - Add Server Credits To User *Usage : +sadd <Uuser> <amount>*. \n <a:green:473603173592858634> **+serverremove** - Remove Currency from user *Usage : +sremove <user> <amount>*. \n <a:green:473603173592858634> Commands Are Operating`)
return message.channel.send(embed5)

    
   
             }
    
   
             
        
    
   
             
  
    } 
  }
  }
}
  }
}

exports.config = {
    command: 'help',
    aliases: ['assistance','helper'],
    plevel: "User",
    description: "Sends the Help Commands through chat",
    usage: "help [Command Name]",
    category: "Helper"
};

exports.extra = {
    hidden: false
};
