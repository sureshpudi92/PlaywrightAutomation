/*

Locator-Identifies the element on the web page
DOM-Document obect model
DOM is and API interface provided by browser

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.(non interactive like Text)
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import {test,expect,Locator} from '@playwright/test'

test("verify playwright locators",async ({page})=>{
    
   await page.goto("http://www.automationpractice.pl/index.php");

 //1.page.getByAltText() to locate an element, usually image, by its text alternative.

  const logo:Locator= page.getByAltText("My Shop")
   await expect(logo).toBeVisible();

 //2.page.getByText() to locate by text content.use to find non interactive elements like headings

 //ex: <h2>Welcome to our store</h2>

  await expect(page.getByText("Follow us on Facebook")).toBeVisible();  //full string
  //await expect(page.getByText("Follow us")).toBeVisible();  //partial/substring
  //await expect(page.getByText(/Follow\s+Us\s+On\s+Facebook/i)).toBeVisible();  //Regular Expression

  //3. page.getByRole() to locate by explicit and implicit accessibility attributes.(role is not an attribute)
  //ex:Role locators include buttons, checkboxes, headings, links, lists, tables, and many more

  await page.getByRole("link",{name:'Sign in'}).click();

  await expect(page.getByRole("heading",{name:'Create an account'})).toBeVisible();

  //4.page.getByLabel() to locate a form control by associated label's text.

  await page.getByLabel('Email address').nth(0).fill("sureshpudi1992@gmail.com");

  await  page.getByRole("button",{name:'Create an account'}).click();

  await expect(page.getByRole("heading",{name:'Your personal information'})).toBeVisible();
  //5.page.getByPlaceholder() to locate an input by placeholder.

  await page.getByPlaceholder('Search').fill("T-shirts");

  //6. page.getByTitle() to locate an element by its title attribute.like name of the link

  await expect(page.getByTitle("Contact us")).toHaveText("Contact us");

  //7.page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
   
   await expect(page.getByTestId("isEmail")).toHaveValue("sureshpudi1992@gmail.com");


  

  



})