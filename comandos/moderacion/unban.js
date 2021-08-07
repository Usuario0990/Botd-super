const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unban", 
  alias: ["desbanear"], 

async execute (client, message, args){

  if(!message.guild) return;

  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos!")

  let userID = args[0];

  if(!userID) return message.channel.send("Debes colocar una ID!")
  if(userID === "861259381849194576"){
    return message.channel.send("Hey no! No puedes hacer eso conmigo!")
  }
  const member = await client.users.fetch(userID)

  message.guild.fetchBans().then(bans => {
    if(bans.size === 0) return message.channel.send("<a:equis1:839254207680348160> No se ha registrado ningún miembro baneado!")

    let bUser = bans.find(b => b.user.id === userID)
    if(!bUser) return message.channel.send("Ese miembro no estaba baneado!")

    message.guild.members.unban(bUser.user)    
  })

  message.channel.send(`El usuario **${member.username}** fue desbaneado correctamente!`)  

 }

} 