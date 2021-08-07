const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require("megadb")
const ms = require("ms")

module.exports = {
  name: "tempban", 
  alias: ["temp-ban"], 

async execute (client, message, args){

  var perms = message.member.hasPermission("BAN_MEMBERS")

  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  let user = message.mentions.members.first()

  if(!user) return message.channel.send("Menciona a un usuario!")

  if(user.id === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }

  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0 ) return message.channel.send("No puedes banear a una persona de igual o mayor rango que el tuyo.")

  let time = args[1]

  if(!time) return message.channel.send("Debes poner el tiempo que el usuario estará baneado! Ejemplo: 10s, 1h, 30m, etc.")

  const tempban = new db.crearDB("tempban")

  if(!tempban.tiene(message.guild.id)){
      tempban.establecer(`ultimotempban_${message.guild.id}`, "no")
  }

  const tempbanxd = new Discord.MessageEmbed()
    .setTitle("Tempban")
    .setDescription(`<a:check1:839254203032535080> ${user} ha sido tempbaneado correctamente!`)    
    .setColor("RED")
    .addField("Tiempo", time, true)
    .addField("Moderador", `${message.author}`, true)
    .setFooter("Pueden ocurrir errores, ya que a veces el bot se desconecta")
    .setTimestamp()

  message.channel.send(tempbanxd)

  let timer = ms(time)

  let tiempo = timer

  

  tempban.establecer(`ultimotempban_${message.guild.id}`, user.id)

  await user.ban({reason: `Usuario tempbaneado por ${message.author.tag} por ${time}`})
  await setTimeout(async function () {
    await message.guild.members.unban(user.id)

    const usuario = await tempban.obtener(`ultimotempban_${message.guild.id}`)

    message.channel.send(`El usuario <@${usuario}> fue desbaneado después de un tempban de ${time}.`)
  }, tiempo)

 }

} 