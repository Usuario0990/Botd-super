const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const canvacord = require("canvacord");

module.exports = {
  name: "triggered", 
  alias: [], 

async execute (client, message, args){

  let avatar = message.author.displayAvatarURL({ dynamic: false, format: "png" })
  let image = await canvacord.Canvas.trigger(avatar);
  let attachment = new Discord.MessageAttachment(image, "triggered.gif")
  return message.channel.send(attachment)

 }

} 