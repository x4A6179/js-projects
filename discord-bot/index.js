// Import required packages
require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const puppeteer = require('puppeteer');
const {prefix, TOKEN} = require('./config.json')


// Initializing the Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();

// Dynamically accessing command files
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file in commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


// Starting up the bot (client object)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;
  try {
    client.commands.get(command).execute(message, args);
  } catch (error){
    console.log(error);
    message.channel.send(`Now you know you can't do that ${message.author}`);
  }
});

client.login(TOKEN);
