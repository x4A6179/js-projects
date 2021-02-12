const puppeteer = require('puppeteer');
require('dotenv').config();

(async () => {
  try {
    //create browser instance
    const browser = await puppeteer.launch({ headless: true, timeout: 2000 });
    //const context = browser.createIncognitoBrowserContext();
    const page = await browser.newPage();
    page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36');


    //Go to Twitter, look for login button
    await page.goto('https://www.twitter.com/');
    await page.waitForSelector('a[data-testid="loginButton"]');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'networkidle2' }),
      page.click('a[data-testid="loginButton"]'),
    ]);
    console.log("Found the button!\n");


    //Login to Twitter
    console.log("Attempting to log in...\n");
    await page.focus('[name="session[username_or_email]"]');
    await page.type('input[name="session[username_or_email]"]', `${process.env.USERNAME}`, {delay: 20});
    await page.type('[name="session[password]"]', `${process.env.PASSWD}`, {delay: 20});
    await Promise.all([
      page.waitForNavigation({waitUntil: 'domcontentloaded'}),
      page.click('div[data-testid="LoginForm_Login_Button"]'),
    ]);
    await page.waitForSelector('form[id=login-verification-form]');
    let auth = page.$('div[class="PageHeader Edge"]').innerText;
    let reg = /auth+/ig;
    //if (reg.test(await page.$('div[class="PageHeader Edge"]').innerText === true){
      console.log(auth);
    //}
    await page.waitForTimeout(60000);

    //Logout of Twitter
    console.log("Attempting to log out...");
    await browser.close();
  } catch (e) {
    console.log('Error' , e)
  }
})();
