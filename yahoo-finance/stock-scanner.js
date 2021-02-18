const puppeteer = require('puppeteer');
const $ = require('cheerio');
const CronJob = require('cron').CronJob;

const url = "https://finance.yahoo.com/"

async function createBrowser() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  return page;
}

async function scrape(page){
  await page.reload({waitUntil: 'domcontentloaded'});
  let html = await page.content();
  let sp = await page.$('#marketsummary-itm-0');
  console.log(sp);
}

//this should read S&P, DOW, NASDAQ, and Russell Futures for the day


async function main() {
  let page = await createBrowser();
  await scrape(page);
}

main();
