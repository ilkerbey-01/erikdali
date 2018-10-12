const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "**Kurallar**",
      description: "**Discord içerisinde ve diğer etkinliklerde tüm kurallar geçerlidir ve discord sunucusuna katılan herkesin kuralları okuduğu varsayılarak muamele yapılacaktır.**",
      fields: [{
          name: "İngilizce ve Türkçe dışında dil konuşmak ve yazmak yasaktır.",
          value: "**Din, dil, ırk ayrımı yapmak yasaktır.**"
        },
        {
          name: "Discord sunucusunda spam yapmak yasaktır.",
          value: "**Special rank for special people rolü kişiye özeldir.**"
        },
        {
          name: "Herhangi bir discord sunucusunun reklamının yapılması yasaktır.",
          value: "**Discord ve Minecraft sunucularının hepsinde küfür etmek yasaktır.**"
        },
        {
          name: "Sunucudaki vatandaşlara aşağılayıcı, küçük düşürücü şeyler söylemek yasaktır.",
          value: "**Siyaset yapmak yasaktır.**"
        },
        {
          name: "1 haftadan fazla pasif kalmak sunucudan atılmanıza sebep olabilir.",
          value: "**Kurallara uymayan kişiler sunucudan uzaklaştırılacaktır.**"
        },
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "by ilker arıcı"
      }
    }
  })
};
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 0 
};

exports.help = {
  name: 'kurallar', 
  description: 'Kuralları Gösterir',
  usage: 'kurallar'
};
