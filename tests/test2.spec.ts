
import{test,expect} from "@playwright/test"

test("verify page url",async ({page})=>{

   await page.goto("http://www.automationpractice.pl/index.php");

    let url:String= page.url();
    console.log("Title is",url)

   await expect(page).toHaveURL(/automationpractice/);
})