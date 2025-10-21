/* CSS(Cascading Style Sheets)

html+js+CSS 
2 types of css 

1.absolute css locator
2. relative css locator

tag with id                          tag#
tag with class                       tag.class
tag with any other attribute         tag[attribute=value]
tag with class and attribute         tag.class[attribute=value]

Note: tag is always optional

page.Locator(css/xpath)

*/

import{test,expect,Locator} from '@playwright/test'

test("verify cc locators", async({page})=>{

     await page.goto("http://demowebshop.tricentis.com/");

    // const searchbox:Locator =page.locator("input#small-searchterms");
    // await searchbox.fill("TShirts");

    await expect(page.locator("input#small-searchterms")).toBeVisible();

    //1.tag#id

    await page.locator("input#small-searchterms").fill("Tshirts");  

    //2.tag.class

   // await page.locator("input.search-box-button").click();


   //3. tag[attribute=value]

   // await page.locator("[type=submit]").nth(0).click();

   // 4. tag.class[attribute=value]

   await page.locator("input.search-box-button[type=submit]").click();



})