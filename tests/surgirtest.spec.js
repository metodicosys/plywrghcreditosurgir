import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePageGeneral } from '../pages/HomePageGeneral';
import { HomePage } from '../pages/HomePage';
import { CreditDocuments } from '../pages/CreditDocuments';
import { CreditRisk } from '../pages/CreditRisk';
import { CreditAplication } from '../pages/CreditAplication';
//approve
import { LoginPageAprove } from '../pages/LoginPageAprove';

test ('test @login @fast', async({page}) => {
annotation: {
    type: 'my issues'
    description: 'https://github.com/microsoft/playwright/issues/23180'
}

//Login revisor
const Login = new LoginPage(page)
await Login.gotoLoginPage()
await Login.login('asistente01','Surgir02*')
await page.waitForTimeout(2000)

await Login.rol()
//await Login.filtro1()
await page.waitForTimeout(3000)

//Home general
const Homepgeneral = new HomePageGeneral(page)
await Homepgeneral.homeg()
await page.waitForTimeout(1000)

//Home revisor
const Home = new HomePage(page)
await page.waitForTimeout(2000)
//await Home.home()
await Home.filtrodni('44903991') //24384342
await page.waitForTimeout(1000)
await Home.writecards()
//await Home.nextnext()
await page.waitForTimeout(1000)

//Solicitudes revisor
const Document = new CreditDocuments(page)
await page.waitForTimeout(800)
await Document.documents()
await page.waitForTimeout(1000)
//await Document.checkduc()
//await page.waitForTimeout(1200)
//await Document.chckcerti()
//await page.waitForTimeout(1000)
//await Document.checkexperian()
//await page.waitForTimeout(800)
//await Document.checkdochouse()
//await page.waitForTimeout(800)
//await Document.checkfotocustomer()
//await page.waitForTimeout(800)
//await Document.checkfotoanverso()
//await page.waitForTimeout(800)
//await Document.checkfotoreverso()
//await page.waitForTimeout(800)
//await Document.checkselfie()
//await page.waitForTimeout(800)
//await Document.checkfotoaccount()
//await page.waitForTimeout(1000)
//await Document.checkpresobra()
//await page.waitForTimeout(800)
//await Document.checksegoptative()
//await page.waitForTimeout(800)
//await Document.checkRseIndiv()
//await page.waitForTimeout(800)
//await Document.checkcpatrimonio()
//await page.waitForTimeout(800)
//await Document.checkfirmapart()
//await page.waitForTimeout(800)
//await Document.checkinversion()
//await page.waitForTimeout(800)
//await Document.checkdesgporcentual()
//await page.waitForTimeout(2000)

//Riesgo revisor
const Risk = new CreditRisk(page)
await Risk.revision()
await page.waitForTimeout(1000)

//Solicitud revisor
const Aplicattion = new CreditAplication(page)
await Aplicattion.conditions()
await page.waitForTimeout(1000)
await Aplicattion.tasaa()
await page.waitForTimeout(1000)
await Aplicattion.approve()
await page.waitForTimeout(3000)
await Aplicattion.closereview()
await page.waitForTimeout(3000)

//Login aprobador
const LoginAprove = new LoginPageAprove(page)
await LoginAprove.gotoLoginPage()
await LoginAprove.login('jefeni02','Surgir02*')

await LoginAprove.rol()
await page.waitForTimeout(5000)

//Home general
const HomepgeneralApr = new HomePageGeneral(page)
await HomepgeneralApr.homeg()
await page.waitForTimeout(1000)

//Home Aprobador
const HomeA = new HomePage(page)
await page.waitForTimeout(2000)
//await Home.home()
await HomeA.filtrodni('44903991') //24384342
await page.waitForTimeout(1000)
await HomeA.writecards()
//await Home.nextnext()
await page.waitForTimeout(1000)

await expect(page).toHaveTitle(/playwright/);

})
