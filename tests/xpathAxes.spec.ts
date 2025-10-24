import{test,expect,Locator} from '@playwright/test'

test("Xpath Axes demo",async ({page})=>{

await page.goto("https://www.hyrtutorials.com/p/add-padding-to-containers.html");


//1. self axis- select <td> element that contains Germany

const Germanycell:Locator=page.locator("//td[text()='Germany']/self::td");
await expect(Germanycell).toHaveText('Germany');


//2. parent axis-get parent <tr> of germany cell
const parentRow:Locator=page.locator("//td[text()='Germany']/parent::tr");
console.log(await parentRow.textContent())
await expect(parentRow).toContainText("Maria Anders");

//3. child axis -get all <td> children of third <tr> in the table
const child:Locator=page.locator("//table[@id='contactList']//tr[3]/child::td");
console.log(await child.count());
expect(child.nth(1)).toHaveText("Francisco Chang");
console.log(await child.nth(1).textContent());

//4.Get Ancestor axis-get <table> of the Germany cell

const ancestor:Locator=page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestor).toHaveAttribute('id','contactList');
console.log(await ancestor.allTextContents());

//5. Get decendant -get <td> of table

const descendant:Locator=page.locator("//table[@id='contactList']//descendant::td");
await expect(descendant).toHaveCount(30);

//6. Following axes-get the <td> that comes after the germany
const following:Locator=page.locator("//td[text()='Germany']/following::td[1]");
await expect(following).toHaveText("5000");

//7.Following-sibling -get<td's> right after the germany
const following_sib:Locator=page.locator("//td[text()='Germany']/following-sibling::td");
await expect(following_sib).toHaveCount(2);



//8.Preceeding axis-get the <td> that comes before the germany
const preeding:Locator=page.locator("//td[text()='Germany']/preceding::td[1]");
await expect(preeding).toHaveText("Maria Anders");

//9.Preceeding axis-get the <td> that comes left the germany
const preeding_sib:Locator=page.locator("//td[text()='Germany']/preceding-sibling::td[1]");
await expect(preeding_sib).toHaveCount(1);
console.log(await preeding_sib.first().textContent());


})