import{test,expect,Locator} from '@playwright/test'

test("verify autosuggest dropdowns",async({page})=>{

    await page.goto("https://www.flipkart.com/");
    page.locator("input[name=q]").fill("smart");
    await page.waitForTimeout(3000);
// Get all the suggested options-->ctrl+shift+p on DOM--->emulate found page
    const options:Locator=page.locator("ul>li");
    const count:number=await options.count();
    console.log("Total no of options are ",count);

    //printed all the suggested options in the console
    console.log(" fifth option is ",await options.nth(5).textContent());

    /* for(let i=0;i<count;i++){

        //console.log("All options",await options.nth(i).textContent());    // print everything inlude secrets
        console.log(await options.nth(i).innerText());                      //only visible text
    } */

       // console.log(await options.allTextContents());

       //Another way

        const Alloptionstext:string[]=await options.allTextContents();
        for( const opt of Alloptionstext){

            console.log(opt)
        }


//click on smartphone option

        for( let text of Alloptionstext){

            if(text==="smartphones"){

                options.nth(Alloptionstext.indexOf(text)).click();
                break;
            }
        }

        //Another way 2

       /*  for(let i=0;i<count;i++){

            const text:string=await options.nth(i).innerText();
            if(text==="smartphones"){

                await options.nth(i).click();
                break;
            }

        } */

})