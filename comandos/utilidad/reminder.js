const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const ms = require("ms")

module.exports = {
  name: "reminder", 
  alias: ["recordatorio"], 

async execute (client, message, args){

  let tiempo = args[0]
  if(!tiempo) return message.channel.send("<a:equis1:839254207680348160> Debes poner un tiempo! Ejemplo: 1h, 30m, 10s, etc.")

  let recordatorio = args.slice(1).join(" ")
  if(!recordatorio) return message.channel.send("<a:equis1:839254207680348160> Debes poner que quieres que te recuerde!")

  let time = ms(tiempo)

  let timer = time

  const motivo_reminder = new db.crearDB("motivo_reminder")

  if(!motivo_reminder.tiene(message.author.id)){
    motivo_reminder.establecer(message.author.id, "no")
  }

  motivo_reminder.establecer(message.author.id, `${recordatorio}`)

  const embed = new Discord.MessageEmbed()
  .setTitle("Recordatorio")
  .setDescription(`<a:check1:839254203032535080> ${message.author} Tu recordatorio ha sido activado, se te recordará en **${tiempo}**\n\n**Recordatorio:** ${recordatorio}`)
  .setColor("BLUE")

  message.channel.send(embed)

  setTimeout(async function(){
    const recordar = await motivo_reminder.obtener(message.author.id)
    message.channel.send(`<a:check1:839254203032535080> ${message.author}, tienes un recordatorio!\n**${recordar}**`)
  }, timer)

 }

} 