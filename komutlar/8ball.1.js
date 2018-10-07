const Discord = require('discord.js');

const cevaplar = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if (!soru) return message.channel.send(cevap)
    else message.reply('Sadece boyunu sor, işlevini değil. **Doğru Kullanım**: !kacsantim')

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'kacsantim', 
  description: 'Zor soru zor cevap',
  usage: 'kacsantim'
};
