import{test,expect,Locator} from '@playwright/test'

test("validate xpath locators",async ({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    // 1. Absolute xpath--starts from root node using single /

    const logo:Locator =page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(logo).toBeVisible();

    //2. Relative Xpath

    const logo_title:Locator=  page.locator("//img[@alt='Tricentis Demo Web Shop']");
    const altText = await logo_title.getAttribute('alt');
    console.log(altText);
    expect(altText).toContain("Shop");

    //3 contains()

    const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
    const productCount:number=await products.count();
    console.log("number of products:",productCount);
    expect(productCount).toBeGreaterThan(0);
    
     console.log(" first product name:",await products.first().textContent());
     console.log(" Last product name:",await products.last().textContent());
     console.log(" second product name:",await products.nth(1).textContent()); //Index starts from zero

            let ProductList:String[] =await products.allTextContents();
            console.log(ProductList);  //returns string array
            for(let pl of ProductList){

                console.log(pl); //returns list of products
            }

    //4. starts-with()

    const buildProducts:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
    const buildProducts_count:number =await buildProducts.count();
    console.log(buildProducts_count);
    expect(buildProducts_count).toBeGreaterThan(1);

    //5.text()

    const RegisterLink:Locator=page.locator("//a[text()='Register']");
    await expect(RegisterLink).toBeVisible();

    //6. Last()

    const lastitem:Locator=page.locator("//div[@class='column follow-us']//li[last()]");

     await expect(lastitem).toBeVisible();
     console.log("Text content of last item: ", await lastitem.textContent());


         //6. position()

    const positionitem:Locator=page.locator("//div[@class='column follow-us']//li[position()=2]");

     await expect(positionitem).toBeVisible();
     console.log("Text content of second item: ", await positionitem.textContent());
    

})