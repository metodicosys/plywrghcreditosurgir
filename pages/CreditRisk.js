const { expect } = require("@playwright/test");

exports.CreditRisk = class CreditRisk{

    constructor(page){
        this.page = page;

        //Distribución
        this.trisk = page.getByRole('tab', { name: 'Riesgos' });
       // this.duc = page.locator('list-documents').getByText('Documento único de crédito');


      
       
    }

    async revision(){

        //cabecera
        await this.trisk.click();

        /*
        const riesgo2 = await this.page.$$("//div[@class='doc-risk--left']");
        for (const scanriesgo of riesgo2)
        {
            const riesgoall = await scanriesgo.textContent();
            console.log("Riesgosos:",riesgoall);
        }*/





}
}