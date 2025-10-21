import {test, expect} from '@playwright/test';

/*

syntax:

test("verify page title",()=>{

//step1
//step2.........

})
*/

//Fixture-Global variable---page, Browser

test("verify page title",async ({page})=>{

   await page.goto("http://www.automationpractice.pl/index.php");

    let page_title:String=await page.title();
    console.log("Title is",page_title)

   await expect(page).toHaveTitle("My Shop");
})
