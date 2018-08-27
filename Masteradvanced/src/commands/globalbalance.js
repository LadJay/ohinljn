exports.run = (client, message) => {
  const cookie = require('cookiesdb');
  let prefix = "+"
  var Jimp = require("jimp");
  let user = message.mentions.users.first() || message.author;
  console.log(user.id);
  cookie.fetchCookies(`globalCredits_${user.id}`).then(pb => {
    console.log(pb);
    
Jimp.read("https://cdn.discordapp.com/attachments/457992834268790814/473193558711468032/with_coins.png", function (err, lenna) {
    Jimp.read(lenna.buffer, function (err, image) {
    // do stuff with the image (if no exception)
});
 
Jimp.read("https://cdn.discordapp.com/attachments/476516904736129026/482581064947204106/staff_only.png", function (err, image) {
    Jimp.read(lenna.buffer, function (err, image) {
});
                                  Jimp.loadFont(Jimp.FONT_SANS_16_WHITE).then(function (font) {
                                      Jimp.loadFont(Jimp.FONT_SANS_8_WHITE).then(function (font2) {

                                      Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font1) {

                         Jimp.read(user.avatarURL, function (err, imagetouse) {

let user3 = user.id === "293805585378574336" 

            if (err) throw err;
            imagetouse.quality(100)
                      .resize(119,119)
                      .write("imagetouse.jpg");            
  if (err) throw err;
    lenna.resize(1217, 340)            // resize
         .quality(100)            
        .print(font1, 500, 78, `${user.username}#${user.discriminator}`)
                            .print(font1, 620, 125, `${pb.value.toLocaleString()}👑`)
                                               .composite( imagetouse, 210,81 )

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

};

exports.config = {
  command: 'bal',
  aliases: ["balance","credits","coins","money","check"],
  plevel: "User",
  description: "Currency Amount [Global]",
  usage: "+balance | +bal",
  category: "Currency"
};

exports.extra = {
  hidden: false
};