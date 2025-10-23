import{test,expect, Locator} from '@playwright/test'

test("validate dynamic element",async ({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/");


   //xpath

  //const button:Locator= page.locator("//button[@name='start' or @name='stop']");

  //CSS
  
  //const button:Locator= page.locator("button[name='start'], button[name='stop']");

  //using playwright getByRole()

  const button:Locator= page.getByRole("button",{name:/START|STOP/});

  for(let i=0;i<5;i++){ //to click multiple time in a loop

    await button.click();

    await page.waitForTimeout(1000);

  }

  
  


})