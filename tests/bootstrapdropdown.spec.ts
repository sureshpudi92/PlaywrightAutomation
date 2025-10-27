import{test,expect,Locator} from '@playwright/test'

test("verify bootstrap dropdowns",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    //login to application
    await page.locator("input[name=username]").fill("Admin");
    await page.locator("input[name=password]").fill("admin123");
    await page.locator("button[type=submit]").click();

    //click on PIM tab
   await page.getByText("PIM").click();

   //click on job title dropdown
   await page.locator("form i").nth(2).click();

   await page.waitForTimeout(2000);

   //capture all the options under dropdown
    const jobtitles:Locator=page.locator("div[role='listbox'] span");
    const count:number=await jobtitles.count();
    console.log("Total job titles are ",count);
    const jobtitlestext:string[]=await jobtitles.allTextContents();

    //print all the job titles in console
    console.log("Job titles are :");
    for(const title of jobtitlestext){
        console.log(title);
    }   

    //click on specific job title--->QA Lead
    for(let i=0;i<count;i++){

        const title:string=await jobtitles.nth(i).innerText();
        if(title==="QA Lead"){
            await jobtitles.nth(i).click();
            break;

        }
    }

})