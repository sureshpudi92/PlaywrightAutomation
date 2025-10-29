import{test,expect,Locator} from '@playwright/test'

test("static web table",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
   const table:Locator= page.locator("table[name='BookTable'] tbody");
   await expect(table).toBeVisible();

   //1. count number of rows in a table
   //const table_rows=page.locator("table[name='BookTable'] tbody tr");
   const table_rows:Locator=table.locator("tr"); //chaining of locator 
   await expect(table_rows).toHaveCount(7); //7 approach 1

   const rowcount:number= await table_rows.count();
   console.log("Row count is" , rowcount);
   expect(rowcount).toBe(7); //approach 2

   //2. count number of headers/columns

   //const numberofcolumns=page.locator("table[name='BookTable'] tbody tr th");
   const numberofcolumns=table_rows.locator("th");
   await expect(numberofcolumns).toHaveCount(4);  //4 approach 1

    const columnscount=await numberofcolumns.count();
    console.log(columnscount);
    expect(columnscount).toBe(4);

    //Read all data from 2nd row(index2 means 3rd row including header)
    const secondrowcells:Locator=table_rows.nth(2).locator("td");
    console.log(secondrowcells);
    const secondrowtext:string[]=await secondrowcells.allInnerTexts();
    console.log("second row cells are:",secondrowtext);

    await expect(secondrowcells).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]); //assertion

    console.log("printing 2nd row data");

    for( const text of secondrowtext){

        console.log(text);
    }

    //4. Read all data from table excluding heading
    
      const rowsandcolumns:Locator= table_rows.locator("td");  
      const rowsandcolumnstext:string[]= await rowsandcolumns.allInnerTexts();

      console.log("Printing all data")

      for(let alltext of rowsandcolumnstext){

        console.log(alltext);


      }

      //Another approach to print tabular format

      const allrows=await table_rows.all();

      console.log(" BookName author Subject Price")

      for(let row of allrows.slice(1)){ //to skip header row

        const cols=await row.locator("td").allInnerTexts();
        console.log(cols.join('\t'));


      }


})