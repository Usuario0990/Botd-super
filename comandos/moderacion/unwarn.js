const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const mongoose = require("mongoose")
const schema = require("../../models/warnSchema.js")

module.exports = {
  name: "unwarn", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("ADMINISTRATOR")

  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const user = message.mentions.users.first()

  if(!user) return message.channel.send("Menciona a un usuario!")

  if(!args[1]) return message.channel.send("Escribe cuantos warns quieres eliminar del usuario!")

  let palabras = [".", "0.5"]
       if(palabras.some(word => message.content.toLowerCase().includes(word))){
         return message.channel.send("La cantidad de warns que quieres eliminar, no pueden acabar en .!")
       }
   if(user === message.author) return message.channel.send("No puedes eliminar tus propios warns!")
  if(user.id === message.guild.owner.user.id){
    return message.channel.send("No puedes eliminar los warns del dueño del server!")
  }
  if(user.id === "861259381849194576"){
    return message.channel.send("Hey no! Pero si yo no tengo warns >:(")
  }

  let data;

  try {
    data = await schema.findOne({
      userId: user.id,
      guildId: message.guild.id
    })
    if(!data) {
      data = schema.create({
        userId: user.id,
        guildId: message.guild.id
      })
    }
  } catch (error) {
    console.log(error)
  }

  await data.save()

  if(data.warns === 0) return message.channel.send("El usuario mencionado no tiene warns")

  if(data.warns < args[1]) return message.channel.send(`El usuario no tiene ${args[1]} warns para eliminarlos!`)

  if(args[1] === "all"){
    let hola;

  try {
    hola = await schema.findOne({
      userId: user.id,
      guildId: message.guild.id
    })
    if(!hola) {
      hola = schema.create({
        userId: user.id,
        guildId: message.guild.id
      })
    }
  } catch (error) {
    console.log(error)
  }

  hola.warns = 0

  await hola.save()

    const embedtodo = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} ha eliminado todos los warns de ${user.username}`)
    .setDescription(`Los warns de ${user.username} empezarán desde cero.`)
    .setColor("RED")
    .setTimestamp()
    message.channel.send(embedtodo)
  }

  if(data.warns > args[1]){

    let hola;

  try {
    hola = await schema.findOne({
      userId: user.id,
      guildId: message.guild.id
    })
    if(!hola) {
      hola = schema.create({
        userId: user.id,
        guildId: message.guild.id
      })
    }
  } catch (error) {
    console.log(error)
  }

  hola.warns = data.warns - args[1]

  await hola.save()

    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.author.username} ha eliminado ${args[1]} warns de ${user.username}`)
    .setDescription(`Ahora ${user.username} tiene **${hola.warns}** warns.`)
    .setColor("RED")
    .setTimestamp()
    message.channel.send(embed)
  }

 }

} 