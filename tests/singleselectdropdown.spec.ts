import{test,expect,Locator} from '@playwright/test'

test("Verify single select dropdown",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
//1. Select option from drop down 4 ways

    page.locator("#country").selectOption("India");  //visible text
    //page.locator("#country").selectOption({value:'india'});  //using value attribute
    //page.locator("#country").selectOption({label:'India'});    //using label
    //await page.locator("#country").selectOption({index:1});    //using index

//2. count  number of options in the dropdown

const dropdownoptions:Locator=page.locator("#country>option");

console.log(await dropdownoptions.count()); //10

await expect(dropdownoptions).toHaveCount(10);

//3.check an option present in the dropdown

const optiontext:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());
console.log(optiontext);

expect(optiontext).toContain("India");

//4. printing options from the drop down

for( const option of optiontext){

    console.log(option)
}

    

})