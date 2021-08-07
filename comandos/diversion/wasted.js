const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const { Canvas } = require("canvacord")

module.exports = {
  name: "wasted", 
  alias: [], 

async execute (client, message, args){

  let user = message.mentions.users.first() || message.author;

  const avatar = user.displayAvatarURL({ size: 1024, format: "png" })

  const image = await Canvas.wasted(avatar)

  let imagen = new Discord.MessageAttachment(image, "wasted.png")

  message.channel.send(imagen)

 }

} 