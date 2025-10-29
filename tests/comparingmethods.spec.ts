import{test,expect,Locator} from '@playwright/test'

test("innertext and textcontent comprison",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");
    const products:Locator=page.locator(".product-title");
    const count:number=await products.count();


    //1. innertext() vs textcontent
    for(let i=0;i<count;i++){

        //const productname:string=await products.nth(i).innerText();
        //console.log(productname);                                        //Extract plain text with out spaces

       const productname: String | null=await products.nth(i).textContent();
       console.log(productname?.trim());                                 //extract text content includeing hidden elements with spaces
    }



    //2. allinnertext() vs alltextcontent

   /* const productnames:string[] = await products.allInnerTexts();
     console.log(productnames)
 */
   const productnames:string[] = await products.allTextContents();
   //console.log(productnames)
  
  const producttext:string[]= productnames.map(text =>text.trim()); //removes spaces

  for( const names of producttext){

    console.log(names);
  }


  //3.all()---convert to Locator type of array

  const productlocators:Locator[]=await products.all();

  //console.log(await productlocators[1].innerText());

  for(const names2productloc of productlocators){

    console.log(await names2productloc.innerText());
  }

  // for in loop

for( let i in productlocators){

  console.log(await productlocators[i].innerText());
}



}) 