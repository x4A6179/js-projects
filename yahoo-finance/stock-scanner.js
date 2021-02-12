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

//this should read S&P, DOW, NASDAQ, and Russell Futures for the day
async function readFutures(page){
  await page.reload();
  let html = await page.evaluate(() => document.body.innerHTML)
  console.log(html);
}

async function main() {
  let page = await createBrowser();
  await readFutures(page);
}

main();
