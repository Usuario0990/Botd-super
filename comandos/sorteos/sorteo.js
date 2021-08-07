const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require("ms")

module.exports = {
  name: "sorteo", 
  alias: ["giveaway", "new-giveaway"], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  let channel = message.mentions.channels.first()
  if(!channel) return message.channel.send("<a:equis1:839254207680348160> Debes mencionar el canal del sorteo!")
  const valido = message.guild.channels.resolve(channel.id)
  if(!valido) return message.channel.send("<a:equis1:839254207680348160> Ese canal no es de este servidor!")

  let giveawayDuration = args[1]
  if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("<a:equis1:839254207680348160> Debes poner una duración válida. Ejemplo: 20s, 1m, 30m, etc.")

  let giveawayWinners = args[2]
  if(isNaN(giveawayWinners)) return message.channel.send("<a:equis1:839254207680348160> Eso no es un número válido de ganadores!")

  let giveawayPrice = args.slice(3).join(" ")
  if(!giveawayPrice) return message.channel.send("<a:equis1:839254207680348160> Debes decir que vas a sortear!")

  client.giveawaysManager.start(channel, {
    time: ms(giveawayDuration),
    prize: giveawayPrice,
    winnerCount: parseInt(giveawayWinners),
    hostedBy: client.config.hostedBy ? message.author: null,

    messages: {
      giveaway: (client.config.everyoneMention ? "Hola\n\n" : "") + "**NUEVO SORTEO**",
      giveawayEnded: (client.config.everyoneMention ? "Feos\n\n" : "") + "**SORTEO FINALIZADO**",
      timeRemaining: 'Tiempo restante: **{duration}**',
      inviteToParticipate: 'Reacciona en 🎉 para participar',
      winMessage: "Enhorabuena **{winners}**, has ganado **{prize}**!",
      embedFooter: "Acaba",
      noWinner: "Nadie participó en el sorteo",
      hostedBy: "Creado por **{user}**",
      winners: "Ganador(es)",
      endedAt: 'Acaba en',
      units: {
        seconds: 'segundos',
        minutes: 'minutos',
        hours: 'horas',
        days: 'días',
        plural5: false
      }
    }
  })

  message.channel.send(`Sorteo empezado en ${channel}`)

 }

} 