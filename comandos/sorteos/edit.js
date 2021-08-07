const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "edit", 
  alias: ["edit-giveaway"], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  let messageID = args[0]
  if(!messageID) return message.channel.send("<a:equis1:839254207680348160> Debes decirme el ID del sorteo!")

  let nuevosganadores = args[1]
  if(!nuevosganadores) return message.channel.send("<a:equis1:839254207680348160> Debes decirme cuantos ganadores habrán!")

  let nuevopremio = args.slice(2).join(" ")
  if(!nuevopremio) return message.channel.send("<a:equis1:839254207680348160> Debes decirme el nuevo premio del sorteo!")

  client.giveawaysManager.edit(messageID, {
    newWinnerCount: nuevosganadores,
    newPrize: nuevopremio
  }).then(() => {

    message.channel.send(`<a:check1:839254203032535080> Hecho! El sorteo se actualizará en 7 segundos.`)
  }).catch((err) => {
    message.channel.send(`No se ha podido encontrar el sorteo con la ID ${messageID}`)
  })

 }

} 