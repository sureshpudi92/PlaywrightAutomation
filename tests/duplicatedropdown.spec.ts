import{test,expect,Locator} from '@playwright/test'

test("Sorted dropdown",async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const dropdownoptions:Locator=page.locator("#colors>option"); //having duplicates
//const dropdownoptions:Locator=page.locator("#animals>option");  //not having duplicates
 
const optionstext:string[]=(await dropdownoptions.allTextContents()).map(text=>text.trim());

const myset=new Set<String>();
const duplicates:string[]=[];

for( const text of optionstext){

    if(myset.has(text)){

        duplicates.push(text);


    }else{

        myset.add(text);

    }
}

console.log("Duplicates are :",duplicates);

if(duplicates.length>0){


    console.log("Duplicates found",duplicates)


}else{


    console.log("No duplicates found")

}

})