import{test,expect,Locator} from '@playwright/test'

test("Multiselect dropdown",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
//1. Select option from drop down 4 ways

//await page.locator("#colors").selectOption(['Red','Blue','Green']);  //visbile text
await page.locator("#colors").selectOption([{value:'red'},{value:'green'},{value:'blue'}]);  //value attribute
//await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}]);   //using label
//await page.locator("#colors").selectOption([{index:0},{index:2},{index:4}]);

//2. count  number of options in the dropdown

const dropdownoptions:Locator=page.locator("#colors>option");

console.log(await dropdownoptions.count()); //7

await expect(dropdownoptions).toHaveCount(7);

//3.check an option present in the dropdown

const optiontext:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());
console.log(optiontext);

expect(optiontext).toContain("Green");

//4. printing options from the drop down

for( const option of optiontext){

    console.log(option)
}


})