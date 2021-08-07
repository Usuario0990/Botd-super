const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "punch", 
  alias: ["hit", "golpear"], 

execute (client, message, args){

  let links = ["https://img3.wikia.nocookie.net/__cb20130317123607/dragonball/es/images/7/77/Goku_V.S_Vegeta_-_vegeta_le_da_un_poderoso_golpe.gif", "https://pa1.narvii.com/6524/d0bf0de73cb9df9595c2df96c32c0841195b5d3f_hq.gif", "https://pa1.narvii.com/6524/df3d8f7f13001ae63058ca71cd2837ca16c71d43_hq.gif"]

  let mencionado = message.mentions.users.first()
  if(!mencionado) return message.channel.send("Debes mencionar a un usuario!")
  if(mencionado.id === message.author.id) return message.channel.send("No te puedes golpear a ti mismo!")
  if(mencionado.id === "838914926679687207") return message.channel.send("Hey! No puedes hacer eso!")

  const imagen = links[Math.floor(Math.random() * links.length)]

  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} se agarra a golpes con ${mencionado.username}`)
  .setImage(imagen)
  .setColor("YELLOW")
  .setTimestamp()

  message.channel.send(embed)

 }

} 