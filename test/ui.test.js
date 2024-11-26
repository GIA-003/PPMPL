const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('UI Testing using Selenium', function () {
    this.timeout(60000);

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should load the login page', async function () {
        await driver.get('file:D:/prak 4/login.html');
        await driver.wait(until.titleIs('Login Page'), 5000); 
        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('should input username and password using CSS Selector', async function () {
        await driver.wait(until.elementLocated(By.css('#username')), 5000);
        await driver.findElement(By.css('#username')).sendKeys('testuser');
        await driver.wait(until.elementLocated(By.css('#password')), 5000);
        await driver.findElement(By.css('#password')).sendKeys('password123');
        const usernameValue = await driver.findElement(By.css('#username')).getAttribute("value");
        const passwordValue = await driver.findElement(By.css('#password')).getAttribute('value');

        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });

    it('should click the login button', async function () {
        await driver.wait(until.elementLocated(By.id('loginButton')), 5000);
        const loginButton = await driver.findElement(By.id('loginButton'));
        await loginButton.click();
    });

    it('should validate visual elements', async function () {
        await driver.wait(until.elementLocated(By.id('loginButton')), 5000);
        const isButtonDisplayed = await driver.findElement(By.id('loginButton')).isDisplayed();
        expect(isButtonDisplayed).to.be.true;
        await driver.wait(until.elementLocated(By.css('#username')), 5000);
        const isUsernameFieldDisplayed = await driver.findElement(By.css('#username')).isDisplayed();
        expect(isUsernameFieldDisplayed).to.be.true;
        await driver.wait(until.elementLocated(By.xpath('//*[@id="password"]')), 5000);
        const isPasswordFieldDisplayed = await driver.findElement(By.xpath('//*[@id="password"]')).isDisplayed();
        expect(isPasswordFieldDisplayed).to.be.true;
    });
});
