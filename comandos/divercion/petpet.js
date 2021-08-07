const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const pet = require("pet-pet-gif")

module.exports = {
  name: "petpet", 
  alias: [], 

async execute (client, message, args){

   let member = message.mentions.users.first() || message.author;
      
   let animatedGif = await pet(member.displayAvatarURL({format: "png"}))
   const petpet = new Discord.MessageAttachment(animatedGif, "petpet.gif") 
   message.channel.send(petpet)

 }

} 