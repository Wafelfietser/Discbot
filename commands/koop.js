const Discord = require("discord.js");
let saldo = require("../saldo.json");
const fs = require("fs");



module.exports.run = async (bot, message, args) => {
    if (!args.length) {
        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setAuthor('Kies uit de volgende nummers:', bicon)
        .addField("Eten", "1 (Broodje Frikandel)\n" + "2 (Broodje Suarma)\n" + "3 (Broodje Hamburger)\n" + "4 (HotDog)\n" + "5 (Tosti Kaas)\n" + "6 (Tosti Ham)\n" + "7 (Tosti Ham Kaas)\n\n")
        .addField("Drinken", "8 (Ice Tea)\n" + "9 (Fanta)\n" + "10 (Cola)\n" + "11 (Spa rood)\n" + "12 (Spa blauw)\n" + "13 (7up)\n" + "14 (SportDrank)\n" + "15 (Energy)\n")
        .setColor('#D4AF37')
        .setFooter("Bot made by ✪ Milan#9893")
    
        return message.channel.send(botembed)
    }
    else if (args[0] === '1') {
        let Saldos = saldo[message.author.id].saldo;
        if (Saldos < 1){
            message.reply('U heeft niet genoeg geld!')
        }
        if (Saldos >= 1){
        let coinAmt =  1;
        let baseAmt =  1;
        console.log(`${coinAmt} ; ${baseAmt}`);
        if(!saldo[message.author.id]){
          saldo[message.author.id] = {
            saldo: 0
          };
        }
          if(coinAmt === baseAmt){
            saldo[message.author.id] = {
              saldo: saldo[message.author.id].saldo - coinAmt
            };
          fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
            if (err) console.log(err)
          });
          }
      let bicon = bot.user.displayAvatarURL;
      let coinEmbed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("#D4AF37")
      .addField("💸", 'U heeft 1 Broodje Frikandel gekocht!')
    
    
      return message.channel.send(coinEmbed)
        
        }
      }
  else if (args[0] === '2') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 2){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 2){
    let coinAmt =  2;
    let baseAmt =  2;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Broodje Suarma gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '3') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1.2){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1.2){
    let coinAmt =  1.2;
    let baseAmt =  1.2;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Broodje Hamburger gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '4') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 2){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 2){
    let coinAmt =  2;
    let baseAmt =  2;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 HotDog gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '5') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 0.8){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 0.8){
    let coinAmt =  0.8;
    let baseAmt =  0.8;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Tosti Kaas gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '6') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 0.8){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 0.8){
    let coinAmt =  0.8;
    let baseAmt =  0.8;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Tosti Ham gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '7') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1){
    let coinAmt =  1;
    let baseAmt =  1;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Tosti Ham Kaas gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '8') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1.4){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1.4){
    let coinAmt =  1.4;
    let baseAmt =  1.4;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Ice Tea gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '9') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1.6){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1.6){
    let coinAmt =  1.6;
    let baseAmt =  1.6;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Fanta gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '10') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1.5){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1.5){
    let coinAmt =  1.5;
    let baseAmt =  1.5;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Cola gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '11') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1){
    let coinAmt =  1;
    let baseAmt =  1;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Spa rood gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '12') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1){
    let coinAmt =  1;
    let baseAmt =  1;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Spa blauw gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '13') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 1.4){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 1.4){
    let coinAmt =  1.4;
    let baseAmt =  1.4;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 7up gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '14') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 2.3){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 2.3){
    let coinAmt =  2.3;
    let baseAmt =  2.3;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 SportDrank gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }

  else if (args[0] === '15') {
    let Saldos = saldo[message.author.id].saldo;
    if (Saldos < 2){
        message.reply('U heeft niet genoeg geld!')
    }
    if (Saldos >= 2){
    let coinAmt =  2;
    let baseAmt =  2;
    console.log(`${coinAmt} ; ${baseAmt}`);
    if(!saldo[message.author.id]){
      saldo[message.author.id] = {
        saldo: 0
      };
    }
      if(coinAmt === baseAmt){
        saldo[message.author.id] = {
          saldo: saldo[message.author.id].saldo - coinAmt
        };
      fs.writeFile("./saldo.json", JSON.stringify(saldo), (err) => {
        if (err) console.log(err)
      });
      }
  let bicon = bot.user.displayAvatarURL;
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("#D4AF37")
  .addField("💸", 'U heeft 1 Energy gekocht!')


  return message.channel.send(coinEmbed)
    
    }
  }
}


module.exports.help = {
  name: "koop"
}