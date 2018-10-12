const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir kişi belirt. **Doğru Kullanım**: !geymidir <kişi>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'geymidir', 
  description: 'Eşcinsel arkadaşlarını bul!',
  usage: 'geymidir <kişi>'
};
