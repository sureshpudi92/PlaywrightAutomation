import{test,expect,Locator} from '@playwright/test'

test("Sorted dropdown",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const dropdownoptions:Locator=page.locator("#animals>option");
//console.log(await dropdownoptions.allTextContents())

const dropdownoptionstext:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());

const originallist:string[]=[...dropdownoptionstext];
const sortedlist:string[]=[...dropdownoptionstext].sort();

console.log("Original list",originallist);
console.log("Sorted list",sortedlist);

expect(originallist).toEqual(sortedlist);

})