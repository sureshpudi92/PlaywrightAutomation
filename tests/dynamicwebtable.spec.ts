import{test,expect,Locator} from '@playwright/test'

test("Verify chrome cpu load in dynamic table",async({page})=>{

    await page.goto("https://practice.expandtesting.com/dynamic-table");

    //select all the rows and find number of columns

    const table:Locator=page.locator("table.table tbody");

    const rows:Locator[]=await table.locator('tr').all();
    console.log(rows.length);
    expect(rows).toHaveLength(4);

    //1.For Chrome process get value of CPU load.
let cpuload='';
for( const row of rows){

   const processname:string =await row.locator("td").nth(0).innerText();

   if(processname==="Chrome"){

     cpuload=await row.locator('td:has-text("%")').innerText(); // Or cpuload=await row.locator('td',{hasText:'%').innerText();
     console.log("Chrome cpu load ",cpuload);
     break;
   }
   
}
//2.Compare it with value in the yellow label.

const yellowlabel:string=await page.locator("#chrome-cpu").innerText();
console.log("chrome cpu Yellow label",yellowlabel);
if(yellowlabel.includes(cpuload)){

    console.log("Chrome cpu load is equal");
}else{

    console.log("Chrome cpu load is not equal");
}

expect(yellowlabel).toContain(cpuload);















})