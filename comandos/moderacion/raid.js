const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "raid", 
  alias: ["raid-delete", "deleteraid", "raidDelete"], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  let raid = args.join(" ")
  if(!raid) return message.channel.send("<a:equis1:839254207680348160> Hey! Debes poner el nombre de los canales del raid!")

  let canales = message.guild.channels.cache.find(c => c.name === `${raid}`)
  if(!canales) return message.channel.send(`<a:equis1:839254207680348160> No hay ningún canal con el nombre ${raid}!`)

  message.guild.channels.cache.filter(c => c.name === `${raid}`).forEach(async (channel, id) => {
    channel.delete();
  })

  message.channel.send(`<a:check1:839254203032535080> A sus órdenes! Se han eliminado los canales de raid **${raid}**!`)

 }

} 