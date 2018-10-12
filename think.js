const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Düşünmeye başladı!`,
            image: {
                url: "https://i.postimg.cc/Ssm4TkFD/Q2973r-1.gif"
            }
        }
    });  

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, ${bitiş.toFixed(2)} saniye öküz gibi düşündü.`
            }
        });
    }, 5 * 1000);
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
