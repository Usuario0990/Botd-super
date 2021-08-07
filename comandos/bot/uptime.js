const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "uptime", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;

  const moment = require("moment");
  require("moment-duration-format");
  const duration = moment.duration(client.uptime).format(" D [D], H [hrs], m [min], s [segundos]");

  const embed = new Discord.MessageEmbed()
  .setTitle("ChickBot | Uptime")
  .setDescription(`Tiempo que el bot se mantuvo conectado hasta ahora:\n\n**${duration}**`)
  .setColor("RANDOM")

  message.channel.send(embed)

 }

} 