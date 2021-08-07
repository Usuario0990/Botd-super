const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const mongoose = require("mongoose")
const schema = require("../../models/warnSchema.js")

module.exports = {
  name: "warn", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("ADMINISTRATOR")

  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const user = message.mentions.users.first()

  const reason = args.slice(1).join(" ")

  if(!user) return message.channel.send("Menciona a un usuario para warnearlo!")
 if(user === message.author) return message.channel.send("No puedes warnearte a ti mismo!")
  if(user.id === message.guild.owner.user.id){
    return message.channel.send("No puedes warnear al dueño del server!")
  }
  if(user.id === "861259381849194576"){
    return message.channel.send("Hey no! No me puedes warnear a mi!")
  }
  
  if(!reason) return message.channel.send("Debes escribir una razón!")

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

  data.warns += 1
  await data.save()

  const embed = new Discord.MessageEmbed()
  .setTitle("Warn")
  .setDescription(`El moderador ${message.author.username} ha warneado a ${user.username} por ${reason}`)
  .setColor("RED")
  .setFooter(`${user.username} ahora tiene ${data.warns} warns en total.`, user.displayAvatarURL)
  .setTimestamp()

  const embedmd = new Discord.MessageEmbed()
  .setTitle(`Has sido warneado en "${message.guild.name}"`)
  .addField("Autor del warneo:", `${message.author}`)
  .addField("Razón:", `${reason}`)
  .setColor("RED")
  .setFooter("No te olvides de siempre cumplir todas las reglas y respetar todo y a todos.")
  .setTimestamp()

  message.channel.send(embed)
  user.send(embedmd)

 }

} 