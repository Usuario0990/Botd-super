const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require("ms")

module.exports = {
  name: "reroll", 
  alias: [], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  if(!args[0]) return message.channel.send("<a:equis1:839254207680348160> Debes colocar la ID del sorteo!")

  let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(" ")) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0])
  if(!giveaway) return message.channel.send("<a:equis1:839254207680348160> No se ha podido encontrar ese sorteo!")

  client.giveawaysManager.reroll(args[0], {
    messages: {
      congrat: 'El nuevo ganador es {winners}. Enhorabuena!',
      error: 'No participó nadie, no se puede dar un ganador.'
    }
  }).catch((err) => {
    message.channel.send(`No se ha encontrado un sorteo con la ID **${messageID}**.`)
  })

 }

} 