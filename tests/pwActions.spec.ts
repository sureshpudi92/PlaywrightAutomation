import{test,expect,Locator} from '@playwright/test'

test("Text input Actions",async({page})=>{

  await  page.goto("https://testautomationpractice.blogspot.com/");

  const textbox:Locator= page.getByPlaceholder('Enter Name'); //css- input#name   xpath-//input[@id='name']

  await expect(textbox).toBeVisible();
  await expect(textbox).toBeEnabled();

  const maxlength:any=await textbox.getAttribute("maxlength");
  console.log(maxlength);
  expect(maxlength).toBe('15');

  await textbox.fill("Suresh pudi");


  //console.log("input value of text box",await textbox.textcontent()()); //returns empty
   const enteredvalue:string=await textbox.inputValue();
  console.log("input value of text box is:",enteredvalue); //returns input value

})

test("Veify Radio Button actions",async({page})=>{


    await  page.goto("https://testautomationpractice.blogspot.com/");

    const radiobutton:Locator=page.locator("input#male");
   await expect(radiobutton).toBeVisible();
   await expect(radiobutton).toBeEnabled();

   expect(await radiobutton.isChecked()).toBe(false);

  await radiobutton.check();

  expect(await radiobutton.isChecked()).toBe(true);

  await expect(radiobutton).toBeChecked(); // preferrable method
    


})

test.only("Veify check Box actions",async({page})=>{


    await  page.goto("https://testautomationpractice.blogspot.com/");

    //1. select one check box sunday

const sundaycheckbox:Locator=page.getByLabel("Sunday");
await sundaycheckbox.check();
await expect(sundaycheckbox).toBeChecked();

//2.select all the checkboxes and assert each is checked ie. sunday to saturday
const days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const checkboxes:Locator[] =days.map(index=>page.getByLabel(index));
expect(checkboxes.length).toBe(7);
console.log("total no of checkboxes are:",checkboxes.length);

for( const checkbox of checkboxes){

     await checkbox.check();
     await expect(checkbox).toBeChecked();
     
}
// Another approach
/* for(const day of days){
    const checkbox:Locator=page.getByLabel(day);
    await checkbox.check();
    await expect(checkbox).toBeChecked();

} */

    //4. unccheck last 3 checkboxes ie. friday,saturday,thursday

    for( const checkbox of checkboxes.slice(-3)){

     await checkbox.uncheck();
     await expect(checkbox).not.toBeChecked();
     
}
//Toggle checkboxes: if checked uncheck else check
for( const checkbox of checkboxes){

    if(await checkbox.isChecked()) {

     await checkbox.uncheck();
     await expect(checkbox).not.toBeChecked();

    } else {

     await checkbox.check();
     await expect(checkbox).toBeChecked();

    }

}

//Select checkboxes randomly 1,3,6

const randomIndexes:number[]=[0,1,3];

for(const i of randomIndexes){

    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();

}

//select checkbox based on the label
const weekname:string="Monday";
for( const label of days){

    if(label===weekname){
       const checkbox:Locator= page.getByLabel(label);
       await checkbox.check();
       expect(checkbox).toBeChecked();
    }
}

})