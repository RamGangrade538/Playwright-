const { test , expect } = require("playwright/test")

test ("Verify error message " , async ({page}) =>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const url = await  page.url()
    console.log("Url will be : "+url)

    console .log(await page.viewportSize().width)

    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("password").type("admin1234",{delay:2000})

    await page.locator("[type='submit']").click()
    const errormessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log(errormessage)
    const expectedErrorMessage = "Invalid credentials";
    await expect(errormessage).toBe(expectedErrorMessage)
    await expect(errormessage.includes("Invalid")).toBeTruthy()
});