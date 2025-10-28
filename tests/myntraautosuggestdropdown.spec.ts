import{test,expect,Locator} from '@playwright/test'

test("myntra search product",async({page})=>{

    await page.goto("https://www.myntra.com/");
    await page.locator("input[class='desktop-searchBar']").fill("shirt");
    await page.locator("span[class='myntraweb-sprite desktop-iconSearch sprites-search']").click();

    await page.waitForTimeout(5000);

    const search_results:Locator=page.locator("ul[class='results-base'] > li");
    console.log(await search_results.count());

    console.log(await search_results.nth(1).innerText());

   



    


})