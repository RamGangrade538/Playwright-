const {test , expect} = require("@playwright/test")
test.setTimeout(60000); 
test("click on all side menu" , async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").type("Admin")

    await page.getByPlaceholder("password").type("admin123",{delay:2000})

    await page.locator("[type='submit']").click()
    await page.waitForSelector('.oxd-main-menu-item-wrapper a');

    // Extract all the links in the panel
    const panelLinks = await page.$$('.oxd-main-menu-item-wrapper a');

    // Step 1: Print all link texts
    const linkTexts = [];
    for (const link of panelLinks) {
        const linkText = await link.textContent();
        linkTexts.push(linkText.trim());
    }
    console.log("Side menu links:");
    console.log(linkTexts);

    for (let i = 0; i < linkTexts.length; i++) {
        // Re-query links to ensure they are still attached
        const currentLinks = await page.$$('.oxd-main-menu-item-wrapper a');
        const link = currentLinks[i];

        // Get the link text and log it
        const linkText = linkTexts[i];
        console.log(`Clicking on: ${linkText}`);

        // Click the link
        await link.click();

        // Perform any necessary wait to handle navigation
        await page.waitForTimeout(2000);

        // Navigate back to the main page
        await page.goBack();

        // Wait for the side panel to load again
       // await page.waitForSelector('.oxd-main-menu-item-wrapper a');
    }
});