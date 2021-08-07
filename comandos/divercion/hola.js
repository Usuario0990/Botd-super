const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hola", 
  alias: [], 

execute (client, message, args){

  var Mensajes = ["Hola, soy Alfredito.", "Hola", "Saludos :wave:", "Que tal? Que se te ofrece?", "Hola, si necesitas algo, avísame", "Hola, mucho gusto!!! :handshake:", "Hola, ven disfruta...", "Hola, ejem... me presento, soy Alfredito, un pollo que es un bot. :grinning:"];
  var aleatorio = Math.floor(Math.random()*(Mensajes.length));
    message.react('👋');
    return message.reply(Mensajes[aleatorio]);

 }

} 