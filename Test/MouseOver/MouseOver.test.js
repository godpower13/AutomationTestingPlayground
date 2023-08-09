const Page = require('../../Pages/MouseOver/MouseOver')
const {url,timeoutTest, browser} = require('../../config')
const {assert} = require('chai')
const {mouseOverDict} = require('../../Pages/dictionary')
browser.forEach(browser => {
    describe('', async function () {
        let  driver;
        before(async function (){
            this.timeout(timeoutTest)
            driver = new Page(browser)
            await driver.maximizeWindow()
            await driver.visit(url)
            // await driver.clickClassAttribute()
            await driver.sleep(5000)
        })
        after(async function (){
            this.timeout(timeoutTest)
            await driver.closeBrowser()
        })
    })
})