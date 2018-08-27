exports.run = async(client ,message, member) => {
    const cookies = require('cookiesdb');
  const fs = require("fs");
      
 
    var { RichEmbed } = require('discord.js');

   let user = message.mentions.users.first();
        if (!user) {
            user = message.author;
        }
  let warns = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
    if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };
  let upgrade = JSON.parse(fs.readFileSync("./upgrade.json", "utf8"));
    if(!upgrade[user.id]) upgrade[user.id] = {
    upgrade: 1
  };

              const db = require("cookiesdb")
                            const dbs = require("quick.db")

const moment = require('moment')
    require('moment-duration-format')
    
    const config = require('../storages/config.json');    

  let fetchedDB = await db.fetchCookies(`customPrefix_${user.id}`);
        let statusWelcome = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDB.text) {
            fetchedDB.text = config.info
        };
    let fetchedDBBadge = await db.fetchCookies(`customPrefixs_${user.id}`);
        let statusWelcomes = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadge.text) {
            fetchedDBBadge.text = config.badges
        };
  let fetchedDBBadges = await db.fetchCookies(`customPrefixss_${user.id}`);
        let statusWelcomess = await db.fetchCookies(`statusWelcome_${message.guild.id}`);
        if (!fetchedDBBadges.text) {
            fetchedDBBadges.text = config.badges2
        };
   let slot3 = await db.fetchCookies(`customPrefixsss_${user.id}`);
        if (!slot3.text) {
            slot3.text = config.badge3
        };
  
  var Jimp = require("jimp");
  console.log(user.id);
  cookies.fetchCookies(`globalCredits_${user.id}`).then(pb => {
    console.log(pb);
    
Jimp.read("https://cdn.discordapp.com/attachments/476516904736129026/482578896211017738/prof.png", function (err, lenna) {
    Jimp.read(lenna.buffer, function (err, image) {
    // do stuff with the image (if no exception)
});
 
Jimp.read("https://cdn.discordapp.com/attachments/476516904736129026/482581064947204106/staff_only.png", function (err, image) {
    Jimp.read(lenna.buffer, function (err, image) {
});
  
                                  Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(function (font) {
                                      Jimp.loadFont(Jimp.FONT_SANS_8_BLACK).then(function (font2) {

                                      Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font1) {

                         Jimp.read(user.avatarURL, function (err, imagetouse) {

let user3 = user.id === "293805585378574336" 

            if (err) throw err;
            imagetouse.quality(100)
                      .resize(180,160)
                      .write("imagetouse.jpg");            
  if (err) throw err;
    lenna.resize(1236, 729)            // resize
         .quality(100)            
        .print(font1, 350, 160, `${user.username}#${user.discriminator}`)
                           .print(font1, 170, 350, `${pb.value.toLocaleString()}`)
                           .print(font1, 170, 350, `${pb.value.toLocaleString()}`)
                           .print(font1 , 170, 308 , warns[user.id].warns == 0? `0`:`${warns[user.id].warns}`)
                           .print(font1 , 170, 390 , `0`)
                           .print(font1 , 60, 510 , `${fetchedDB.text}`)
                            .composite( imagetouse, 57,103 )

         .write("lena-small-bw.png") // save
         .getBuffer(`image/png`, (err, buf) => {

                        message.channel.send({files: [{attachment: buf, name: `balancepenguboat.jpg`}] })
    })
});
  })
  })
})
})
  })
  })
  
}
exports.config = {
    command: 'p',
    aliases: [],
    plevel: "Bot Owner",
    description: "Check the profile of user",
    usage: "profile",
    category: "Information"
};

exports.extra = {
    hidden: false
};
  
  
