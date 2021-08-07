const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const backup = require("discord-backup")
backup.setStorageFolder(__dirname+"/backups/")

module.exports = {
  name: "backup", 
  alias: [], 

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tienes suficientes permisos!")

  const accion = args[0]
  if(!accion) return message.channel.send("Debes decir que acción vas a hacer.")

  if(accion === "create"){
    backup.create(message.guild, {
      jsonBeautify: true
    }).then(backupData => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Copia de Seguridad Creada")
      .setDescription(`Para cargar la copia de seguridad usa el comando:\n\nbackup load ${backupData.id}`)
      .setFooter("Aviso: No compartas el ID con absolutamente nadie.")

      message.author.send(embed)

      const embed2 = new Discord.MessageEmbed()
      .setTitle("Copia de seguridad creada correctamente")
      .setDescription("El ID ha sido enviado a tu MD")
      .setFooter("Copia de Seguridad creada por: " + message.member.displayName, message.author.displayAvatarURL())

      message.channel.send(embed2)
    })
  }

  if(accion === "load"){

    let backupID = args[1]
    if(!backupID) return message.channel.send("Debes poner el ID de la Copia de Seguridad!")

    const embedfinal = new Discord.MessageEmbed()
    .setTitle("Cargar copia de seguridad")
    .setDescription(":warning: Advertencia: | Cuando cargues la copia de Seguridad, los roles, canales, emojis y lo que pertenece a este server serán reemplazados por los cargados en la copia de seguridad. **Estás seguro que quieres cargar la copia de seguridad?** Si lo estás, reacciona con ✅ para poder cargar la copia de seguridad. Si no lo estás, trata de revisar bien que no te olvidas de nada.")
    .setColor("YELLOW")

    backup.fetch(backupID).then(async () => {
      message.channel.send(embedfinal).then(msg => {
        msg.react("✅")

        msg.awaitReactions((reaction, user) => {
          if(message.author.id !== user.id) return;

          if(reaction.emoji.name === "✅"){
            backup.load(backupID, message.guild).then(() => {
              clearGuildBeforeRestore: true,
              backup.remove(backupID)
            }).catch((err) => {
              return message.channel.send("Hubo un error el realizar la operación.")
            })
          }
        })
      })
    })

  }

 }

} 