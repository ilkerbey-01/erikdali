const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Düşünüyor!`,
            image: {
                url: "https://i.postimg.cc/Ssm4TkFD/Q2973r-1.gif"
            }
        }
    })
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'think', 
  description: 'Düşün DÜŞÜÜÜN, DÜŞÜÜÜÜÜÜN',
  usage: 'think'
};
