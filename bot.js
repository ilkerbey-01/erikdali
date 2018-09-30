const Discord = require('discord.js');
const client = new Discord.Client();
var auth = require('./auth.json');
const prefix = '!';

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansız"
  ];

client.on('ready', () => {
  console.log(`${client.user.tag} adına giriş yapıldı!`);
client.user.setActivity("ilkerbey yapımı, prefix=! ");
});

client.login(auth.token);

const commands = [
{
	command: 'ping',
	description: 'Pings the bot',
	execute: function(msg) {
    msg.reply("Pong!");
    console.log()
	}
},

{
	command: 'builder',
  description: 'Builder ol',
  execute: function(msg)
    {if(msg.member.roles.has(496018053411241986)) {
    msg.channel.send(`Zaten bu roldesin!`);
   } else {
    msg.guildMember.addRole(496018053411241986).catch(console.error);
  }
}},
{
	command: 'think',
  description: 'THONK!!!',
	execute: function(msg) {
     msg.channel.send("THONK!!!", {files: ["https://i.hizliresim.com/Q2973r.gif"]});
     console.log()
	}
},
//Konuş Komutu
{
	command: 'konuş',
	description: 'boş yapar',
	execute: function(msg) {
		msg.channel.send("Selamın Aleyküm Ben Azrail");
    msg.channel.send("Aleyküm Selam Ben de Cebrail")
    console.log()
	}		
},
//Kurallar Komutu
{
	command: 'kurallar',
	description: 'Kuralları Gösterir.',
	execute: function(msg) {
		msg.channel.send({embed: {
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
      text: "© ilker arıcı"
    }
  }
});
	}
},
//Yardım Komutu
{
	command: 'yardım',
	description: 'Yardım komutlarını gösterir.',
	execute: function(msg) {
		msg.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "**Yardım**",
    description: "**Komutların hepsi burada görülebilir.**",
    fields: [{
        name: "!ping",
        value: "Ping ölçer."
      },
      {
        name: "!think",
        value: "Düşün... DÜŞÜN... **DÜŞÜÜÜÜÜÜNNN**..."
      },
      {
        name: "!konuş",
        value: "Boş yapar."
    },
    {
      name: "!kurallar",
      value: "Kuralları gösterir."
  },
	  {
        name: "!reset",
        value: "Bota reset atar."
      },
	  {
        name: "!yardım",
        value: "Bu komutları gösterir."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© ilker arıcı"
    }
  }
});
	}
}
,
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`Sunucuya Hoşgeldin, ${member}`);
}),
 
client.on('message', message => {
    switch(message.content.toLowerCase()) {
        case '!reset':
            resetBot(message.channel);
            break;
        case "!avatar":
            message.channel.send(message.author.avatarURL);
            break;
        default:
            commands.forEach(command => {
                if (message.content.trim().toLowerCase() === prefix + command.command) { 
		    command.execute(message); 
                }
	    });
            break;
    }
}),
//Resetleme
function resetBot(channel) {
    channel.send('Resetleniyor...')
    .then(msg => client.destroy())
    .then(() => client.login(auth.token));
}]
//Kick attırma
client.on("message", (message) => {
  if (message.content.startsWith("!kick")) {
      var member= message.mentions.members.first();
      member.kick().then((member) => {
          message.channel.send(":wave: " + member.displayName + " kicklendi :point_right:");
      }).catch(() => {
          message.channel.send("Yetkin Yok!");
      });
  }
});