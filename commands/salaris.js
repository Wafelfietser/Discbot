const Discord = require("discord.js");
let saldo = require("../saldo.json");
const fs = require("fs");
let cooldown = new Set();
let cdseconds = 1800;



module.exports.run = async (bot, message, args) => {
  if(!cooldown.has(message.author.id)){
    let coinAmt =  + 5;
    let baseAmt =  + 5;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo + coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  cooldown.add(message.author.id);
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", `€${coinAmt} saldo toegevoegd!`)
  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)

  return message.channel.send(coinEmbed)
  


    }
    if(cooldown.has(message.author.id)){
      return message.reply("U moet 30 minuten wachten voordat u dit weer kan doen!")
    }
  
  }


module.exports.help = {
  name: "salaris"
}