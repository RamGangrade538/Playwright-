const {test ,expect  }=require('@playwright/test')

test ('test' , async({page})=>{
    await page.goto("https://www.google.co.in/");
    console.log(await page.title());
    await page.waitForTimeout(2000);
    await page.locator('textarea[name="q"]').fill('pravin');
    await page.waitForTimeout(2000);
    const suggestions = page.locator('[role="listbox"] [role="option"]');


    const suggestionText = await suggestions.nth(3).innerText();
    console.log('4th Suggestion:', suggestionText);
  
    await suggestions.nth(3).click();
  
    // Wait to observe result
    await page.waitForTimeout(3000);

})