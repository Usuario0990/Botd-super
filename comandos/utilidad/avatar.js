const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  let user = message.mentions.users.first() || message.author;

  const embed = new Discord.MessageEmbed()
  .setTitle(`Avatar de **${user.tag}**`)
  .setDescription(`[Descargar Avatar](${user.displayAvatarURL({
      format: "png",
      dynamic: true    
  })})`)
  .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
  .setColor("RANDOM")
  .setFooter(`Avatar solicitado por: ${message.member.displayName}`);
  message.channel.send(embed)

 }

} 