const { test, expect } = require('@playwright/test');

test('homepage has Google title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 
 
  //console.log(`Page Title: ${title}`);

  // Select main menu links
  const menuLinks = await page.$$('a.nav-link');

  // Loop through each link and click it
  for (let i = 0; i < menuLinks.length; i++) {
    const link = menuLinks[i];
    
    // Get the link text for reference
    const linkText = await link.innerText();
    console.log(`Clicking on: ${linkText}`);
    
    // Click on the link
    await link.click();
    
    // Wait for the page to load after clicking
    await page.waitForLoadState('networkidle');
  }

});
