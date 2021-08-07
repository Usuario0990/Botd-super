const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "queue", 
  alias: ["q"], 

execute (client, message, args){

  const queue = client.distube.getQueue(message)

  if(!queue) return message.channel.send("<a:equis1:839254207680348160> No hay canciones reproduciendose!")

  const embed = new Discord.MessageEmbed()
  .setTitle(`Playlist | ${message.guild.name}`)
  .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**, ${song.name} - \`${song.formattedDuration}\``).slice(0, 10).join("\n"))
  .setFooter("Playlist del servidor")
  .setColor("0xff0404")
  .setTimestamp()

  message.channel.send(embed)

 }

} 