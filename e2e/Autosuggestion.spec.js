
const { test , expect }=require("@playwright/test")

test ('Auosuggestion ', async({page}) => {
    await page.goto('https://www.google.co.in/')
    
    await page.waitForTimeout(3000)

    page.getByTitle('Search').type("ram gang")

    await page.waitForTimeout(3000)
    await page.waitForSelector('//[@role="presentation"] li')


    const suggestionsText = await page.$$('//[@role="presentation"] li')
    for(let i=0;i<suggestionsText.length;i++){
        const text = await page.suggestionsText[i].textcontent()
           if(text.includes('ram ganga originates from')){
            await suggestionsText[i].click()
            break
           } 
    }

})