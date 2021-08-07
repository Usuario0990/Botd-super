const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ping", 
  alias: [], 

execute (client, message, args){

  message.channel.send(`:ping_pong: Pong! ${client.ws.ping}ms`)

 }

} 