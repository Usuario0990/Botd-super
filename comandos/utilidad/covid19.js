const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "covid19", 
  alias: [], 

execute (client, message, args){

  if(!message.guild) return;
     const superagent = require('superagent') // Llamamos al npm "superagent"
if (args.join(" ").length < 1) return message.channel.send("¡Escribe el nombre del Pais a buscar información sobre el COVID-19!");
 
let pais = args.join(" ") // Es dónde escribiremos el Nombre del pais a buscar
if(!pais) return message.channel.send("¡Escribe el nombre del Pais a buscar información sobre el `COVID-19`! :x:") // Si el usuario no escribe el nombre del pais, nuestro BOT, retorna un mensaje diciendo que no ha colocado el nombre del pais

superagent
.get(`https://corona.lmao.ninja/v2/countries/${pais}`) // Con el NPM, "superagent", buscamos en la página, la información del pais sobre el covid-19.
.end((err,res) => {
  let body = res.body
  
  if(body.message) return message.channel.send("¡El nombre del pais es invalido! :x:") // Si no encuentra el nombre retorna mensaje que no lo encontro.

  
  var embed = new Discord.MessageEmbed()
  .setAuthor("Casos COVID 19 | " + pais)
  .addField("**Casos Totales**", `${body.cases}`, true) // Casos totales de ese pais
  .addField("**Casos Críticos**", `${body.critical}`, true) // Casos criticos de ese pais
  .addField("**Casos Hoy**", `${body.todayCases}`, true) // Casos de "HOY" de ese pais
  .addField("**Muertes Totales**", `${body.deaths}`, true) // Muertes por el COVID-19 de ese pais
  .addField("**Muertes Hoy**", `${body.todayDeaths}`, true) // Muertes de hoy por el COVID-19 ese pais
  .addField("**Recuperados**", `${body.recovered}`, true) // Recuperados del COVID-19
  .addField("**Medidas de Prevención**", "<a:check1:839254203032535080> Lavarse las manos frecuentemente \n<a:check1:839254203032535080> Usar Gel Antibacterial.\n<a:check1:839254203032535080> Usar Alcohol.\n<a:check1:839254203032535080> Usar mascarilla en todo momento. \n<a:check1:839254203032535080> Mantenerse a 2m de distancia, evitar aglomeraciones.\n<a:check1:839254203032535080> Quedarse en Casa.", true) 
  .setTimestamp()
  .setColor("RANDOM")  
  .setThumbnail("https://fems-microbiology.org/wp-content/uploads/2020/03/2019-nCoV-CDC-23312_without_background-pubic-domain.png")
  message.channel.send(embed)
  
})

 }

} 