const{test,expect}=require('@playwright/test');
const exp = require('constants');

test('title verify ', async({page})=>{
    await page.goto("https://www.google.co.in/")
    const url = await page.url()
    console.log("Url will be : "+url)
    await expect(page).toHaveTitle("Google")
    console.log(await page.title())
});

test("Testing purpose", async ({page}) =>{
    expect(10).toBe(10)
});
test("Testing purpose 2 ", async ({page}) =>{
    expect("Ram").toContain("Ram")
});
test("Testing purpose 3 ", async ({page}) =>{
    expect("Ram").toContain("Ram")
    expect(true).toBeTruthy()
});
test.skip("Testing purpose 4 ", async ({page}) =>{
    expect(false).toBeFalsy()
});