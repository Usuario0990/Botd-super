const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const mongoose = require("mongoose")
const schema = require("../../models/warnSchema.js")

module.exports = {
  name: "warns", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("ADMINISTRATOR")

  if(!perms) return message.channel.send("No tienes los permisos suficientes!")

  const user = message.mentions.users.first()

  if(!user) return message.channel.send("Menciona a un usuario!")

  if(user.id === "861259381849194576"){
    return message.channel.send("Hey! Yo no tengo ningún warn >:(")
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

  const embed = new Discord.MessageEmbed()
  .setTitle(`Warns de ${user.username}`)
  .addField("Cantidad", `${data.warns}`)
  .setColor("RED")
  .setFooter(`Consultado por ${message.author.username}`)
  message.channel.send(embed)

 }

} 