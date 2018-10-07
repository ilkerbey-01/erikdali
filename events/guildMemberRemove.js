module.exports = member => {
  let guild = member.guild;
  member.send('iyi birine benziyordun aslında...');
  guild.defaultChannel.sendMessage(`${member.user.username} sunucudan ayrıldı.`);
};
