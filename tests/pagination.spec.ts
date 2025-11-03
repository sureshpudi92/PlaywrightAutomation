import{test,expect,Locator} from '@playwright/test'
import { abort } from 'process';

test("Verify webtable pagination",async ({page})=>{

   await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

   let hasmorepages=true;

   while(hasmorepages){

    const rows:Locator[]=await page.locator("#example tbody tr").all();

    for(const row of rows){

        console.log(await row.innerText());
    }

    //button[aria-label='Next']
    //button[aria-controls='example']:has-text("›")
    //button[aria-controls='example']:nth-child(9)


    const nextbutton:Locator=page.locator("button[aria-label='Next']");
    const isDisabled:any=await nextbutton.getAttribute('class'); //returns string | null

    if(isDisabled.includes('disabled')){

        hasmorepages=false;


    }else{
         
        await nextbutton.click();

    }


   }

})

test("filter the rows and check the rows count",async ({page})=>{

await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

const dropdown=page.locator("#dt-length-0");
await dropdown.selectOption({label:'25'});

//Approach 1
const rows:Locator[]=await page.locator("#example tbody tr").all();
expect(rows.length).toBe(25); 

//Aproach 2
const rows2:Locator= page.locator("#example tbody tr");
expect(rows2).toHaveCount(25);

})

test(" search for specific data in a table",async ({page})=>{
await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

const searchbox:Locator= page.locator("#dt-search-0");

await searchbox.fill("Paul Byrd");

const rows:Locator[]=await page.locator("#example tbody tr").all();
if(rows.length>1){

    let matchfound=false;
    for(const row of rows){

        const text:string=await row.innerText();
        if(text.includes('Paul Byrd')){

            console.log("Record exist-found")
            matchfound=true;
            break;

        }

    }
    //expect(matchfound).toBe(true);
    expect(matchfound).toBeTruthy();
}else{

    console.log("No Rows found with search text");
}


})