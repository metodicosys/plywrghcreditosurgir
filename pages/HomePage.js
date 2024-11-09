exports.HomePage = class HomePage{

    constructor(page){
       this.page = page;

       //home
       this.searchtxt = '#mat-input-2';
     //  this.searchtxt = page.getByLabel('Buscar');
       this.searchbtn = '#Icons_Functional_ic_search';
       this.searchdown = page.getByTitle('Filtro y búsqueda').locator('div').filter({ hasText: 'Filtro y búsqueda' }).locator('svg');
       this.headerdown = page.getByTitle('Panorama').locator('svg');
       this.nextbtn =  page.getByRole('button', { name: 'Ingresar' });
 
    }

    async home(){
        //total en proceso
        /*
        const totenproceso = await this.page.$$("//div[@class='col-md-6 col-12']");
        for (const totenproc of totenproceso)
        {
            const procall = await totenproc.textContent();
            console.log("Solicitudes en Proceso:",procall);
        }

        //total solicitudes
        const totsol = await this.page.$$("//div[@class='col-md-6 col-6']");
        for (const tsol of totsol)
        {
            const solall = await tsol.textContent();
            console.log("Total de Solicitudes:",solall);
        }
        
        //total desembolso
        const totdsbolso = await this.page.$$("//div[@class='col-md-4 col-sm-6 col-6']");  
        for (const totdbs of totdsbolso)
        {
            const dsball = await totdbs.textContent();
            console.log("Solicitudes:",dsball);
        }

        //Solicitudes en bandeja

        const revisionall = await this.page.$$("//div[@class='card-summary border rounded']");
       //const revisionall = await this.page.$$("//div[@class='row g-3 justify-content-center justify-content-sm-start']");
        const linksall = [];
        for (const revisandoall of revisionall)
        {
            const revisandobandeja = await revisandoall.textContent(); //0k
            const quitandoespaciox = await revisandobandeja.replace(/\s+/g,' ').trim()
            linksall.push(quitandoespaciox);

        }
            console.log("CARDS EN BANDEJA:",linksall);*/
          
            await this.page.locator(this.searchtxt).click();
    }

  // Filtro por DNI
  async filtrodni(numdni){
      //  await page.waitForTimeout(1000)
        await this.page.locator(this.searchtxt).click();
     //   await page.waitForTimeout(1000)
        await this.page.locator(this.searchtxt).fill(numdni);
        await this.page.locator(this.searchbtn).click();
     //   await this.page.locator(this.searchdown).click(); //ocultar buscador
        await this.searchdown.click();
        await this.headerdown.click();

}

//Cards
async writecards(){
    const revision = await this.page.$$("//span[@class='border-end pe-2 fw-bold']");
    const linksn = [];
       for (const revisando of revision)
       {
         const revisandoall = await revisando.textContent(); //0k
         const quitandoespacio = await revisandoall.replace(/\s+/g,' ').trim()
         linksn.push(quitandoespacio);
 
       }
       console.log("SOLICITUD TOMADA:",linksn);

    await this.nextbtn.first().click();

}





}