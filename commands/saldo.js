const Discord = require("discord.js");
let saldo = require("../saldo.json");
const fs = require("fs");



module.exports.run = async (bot, message, args) => {

    if(!saldo[message.author.id]){
        saldo[message.author.id] = {
            saldo: 0
        };
      }

  let Saldos = saldo[message.author.id].saldo;
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'Saldo: €' + Saldos)

  return message.channel.send(coinEmbed)


      
  }


module.exports.help = {
  name: "saldo"
}