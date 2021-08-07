const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invite", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  const embed = new Discord.MessageEmbed()
  .setTitle("Invitación al Bot")
  .setDescription("Oh!!! Me quieres invitar? Muchísimas gracias, me estarías apoyando mucho. :)\n[Invitación](https://discord.com/oauth2/authorize?client_id=861259381849194576&scope=bot&permissions=3087015996)")
  .setColor("RANDOM")

  message.channel.send(embed)
  

 }

} 