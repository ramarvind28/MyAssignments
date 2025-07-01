/*
Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. 2. Load Red Bus in an Chrome browser instance and verify the page title and URL.
Load Flipkart in a Safari browser instance and verify the page title and URL.
Preconditions:
1. 2. Use Playwright to launch Chrome and Safari.
Create two separate browser instances.
3. Use the following URLs:
o Red Bus: https://www.redbus.in
o Flipkart: https://www.flipkart.com
Requirements:
 Red Bus (Edge):
 Flipkart (Firefox):
o Load the home page and print the page title and current URL.
o Load the home page and print the page title and current URL.
*/
import {test, chromium, webkit} from "@playwright/test";
import { channel } from "diagnostics_channel";
test('Chromium Browser and launch redbus.in',async () => {
const chromeLaunch= await chromium.launch({channel:"chrome",headless:false})
const chromeContext=await chromeLaunch.newContext()
const chromePage=await chromeContext.newPage()
await chromePage.goto("https://www.redbus.in")
await chromePage.waitForTimeout(5000)
console.log(`The page tile is ${ await chromePage.title()}`)
console.log(`The page url is ${ await chromePage.url()}`)
})

test('Safari browser and launch flikart.com',async () => {
    const safariLaunch=await webkit.launch({channel:"webkit",headless:false})
    const safariContext=await safariLaunch.newContext()
    const safariPage=await safariContext.newPage()
    await safariPage.goto("https://www.flipkart.com")
    await safariPage.waitForTimeout(5000)
    console.log(`The page title is ${await safariPage.title()}`)
    console.log(`The page url is ${safariPage.url()}`)
    
})