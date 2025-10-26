import{test,expect,Locator} from '@playwright/test'

test("DropDown Assignment", async ({page})=>{

    await page.goto("https://bstackdemo.com/");

    await expect(page.locator("div[class='sort']>select")).toBeEnabled();

    await page.locator("div[class='sort']>select").selectOption({label:'Lowest to highest'});

   await page.waitForTimeout(2000);

    const item_prices:Locator= page.locator("//div[@class='shelf-item__price']//child::div[1]");
    const item_names:Locator=page.locator("p.shelf-item__title");
    await expect(item_prices).toHaveCount(25);
    await expect(item_names).toHaveCount(25);

    const product_name_text:string[]=await item_names.allTextContents();
    const product_prices_text:string[]=await item_prices.allTextContents();

    //print product name and price
    for(let i=0;i<product_name_text.length;i++){

        console.log(`${product_name_text[i]} : ${product_prices_text[i]}`);
        
  
    }
    //identify and print lowest price and highest product
     console.log(`Lowest price product is ${product_name_text[0]} : ${product_prices_text[0]}`);
    console.log(`Highest price product is ${product_name_text[product_name_text.length-1]} : ${product_prices_text[product_prices_text.length-1]}`);

     

})