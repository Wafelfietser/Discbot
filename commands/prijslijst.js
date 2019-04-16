const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Prijslijst', bicon)
    .addField("Eten", "1. €1,00 Broodje Frikandel\n" + "2. €2,00 Broodje Suarma\n" + "3. €1,20 Broodje Hamburger\n" + "4. €2,00 HotDog\n" + "5. €0,80 Tosti Kaas\n" + "6. €0,80 Tosti Ham\n" + "7. €1,00 Tosti Ham Kaas\n\n")
    .addField("Drinken", "8. €1,40 Ice Tea\n" + "9. €1,60 Fanta\n" + "10. €1,50 Cola\n" + "11. €1,00 Spa rood\n" + "12. €1,00 Spa blauw\n" + "13. €1,40  7up\n" + "14. €2,30 SportDrank\n" + "15. €2,00 energy\n")
    .setColor('#D4AF37')
    .setFooter("Bot made by ✪ Milan#9893")

    return message.channel.send(botembed)
}

module.exports.help = {
    name: "prijslijst"
}