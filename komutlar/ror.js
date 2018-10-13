const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} winner winner chicken dinner!`,
            image: {
                url: "https://orig00.deviantart.net/8b31/f/2017/363/5/2/reverse_of_reverse_by_alanmac95-dbq2qlw.png"
            }
        }
    })
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['reverseofreverse','rofr'],
  permLevel: 0 
};

exports.help = {
  name: 'ror', 
  description: 'UNO kartı veren arkadaşını mağlup et',
  usage: 'ror'
};
