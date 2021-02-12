require('dotenv').config();
const Discord = require('discord.js');
const puppeteer = require('puppeteer');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(process.env.TOKEN);
