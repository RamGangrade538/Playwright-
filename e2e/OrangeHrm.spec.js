const {test,expect}= require('@playwright/test')

test('Login ',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const url = await  page.url()
    console.log("Url will be : "+url)

    await page.getByPlaceholder("Username").type("Admin",{delay:3000});
    const typedValue = await page.getByPlaceholder("Username").inputValue();
    console.log("Typed value:", typedValue);
    await page.getByPlaceholder("Password").type("admin123")
    await page.locator("[type='submit']").click()
    // await page.waitForTimeout(5000)

    const title = await page.title()
    console.log(title)
    await page.waitForTimeout(2000)
   

    await page.getByAltText("profile picture").first().click()
    await page.waitForTimeout(2000)
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)


    // verify error

});