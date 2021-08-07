const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const figlet = require("figlet");
const { promisify } = require("util");

module.exports = {
  name: "ascii", 
  alias: [], 

async execute (client, message, args){

  if(!message.guild) return;

  const figletAsync = promisify(figlet);
  let texto = args.join(" "); 
  if(!texto) return message.channel.send("Agrega algo para convertirlo en ascii. (Máximo 20 carácteres)")
  if(texto.length > 20) return message.channel.send("Solo se permite hasta 20 carácteres.")
  let letras = await figletAsync(texto); 
  message.channel.send("```"+letras+"```");

 }

} 