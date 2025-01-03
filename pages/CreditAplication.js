const { expect } = require("@playwright/test");

exports.CreditAplication = class CreditAplication{

    constructor(page){
        this.page = page;

        //Distribución test
       // this.trisk = page.getByRole('tab', { name: 'Riesgos' });
        this.taplicat =  page.getByRole('tab', { name: 'Solicitud' });
        this.nextone = page.getByRole('button', { name: 'Aprobar' });
        this.commentone = page.getByPlaceholder('Comentario de aprobación');
        this.commenttwo= page.getByPlaceholder('Comentario de aprobación', { exact: true});
        this.aproveok = page.getByRole('button', { name: 'Sí, aprobar' });
      //  this.butonok =   page.keyboard;
        this.closeone = page.locator('#mat-mdc-dialog-1 #ic_close');
        this.menuone = page.locator('#Icons_-_System_-_ic_menu');
        this.closetwo = page.getByText('Cerrar sesión');
       // this.duc = page.locator('list-documents').getByText('Documento único de crédito');


      
       
    }

    //Condiciones de prestamo actualizado
    async conditions(){
        //cabecera
        await this.taplicat.click();
        const solicitud2 = await this.page.$$("//div[@class='col-lg-3 data']");  //col-lg-3 data  //content-custom ng-star-inserted
        const datasolicit = [];
        for (const scansolicitud2 of solicitud2)
        {
            const solicitudall2 = await scansolicitud2.textContent();
            const quitandoespaciosol = await solicitudall2.replace(/\s/g,' ',' ').trim()
            const solicit = quitandoespaciosol.substring(0);
            datasolicit.push(solicit);
         //   console.log('Mi Solicitud',solicitudall2);
        }
        console.log("MI SOLICITUD:",datasolicit);
        const numsoldd = datasolicit[0]; 
        const numerosolprod = numsoldd.substring(30,8);
        const destin = datasolicit[1]; 
        const destprod = destin.substring(40,19);

       console.log ("ProductoAll:", datasolicit); // muestra el valor del indice
       console.log ("Producto:", numerosolprod);
       console.log ("Destino de Crédito:", destprod);
       console.log (" ");

    }

    async tasaa(){
      //cabecera
      await this.taplicat.click();
      const tasaa2 = await this.page.$$("//div[@class='card-kpi mb-2']");  //col-lg-3 data  //content-custom ng-star-inserted
      const datatasaa = [];
      for (const scantasaa2 of tasaa2)
      {
          const tasaaall2 = await scantasaa2.textContent();
          const quitandoespaciotas = await tasaaall2.replace(/\s/g,' ',' ').trim()
          const tasaax = quitandoespaciotas.substring(0);
          datatasaa.push(tasaax);
      }
      console.log("TEA:",datatasaa);
      const numteadd = datatasaa[0]; 
      const tea = numteadd.substring(5,0);
      const numtceadd = datatasaa[1]; 
      const tcea = numtceadd.substring(5,0);

     console.log ("TASAAll:", datatasaa); // muestra el valor del indice
     console.log ("TEA:", tea);
     console.log ("TCEA:", tcea);
     console.log (" ");


  }

    async approve(){
        await this.nextone.click()
        await this.commentone.click()
        await this.commenttwo.fill('APROBANDO\nPREV')
        await this.commenttwo.press('Enter')
   //     await this.butonok.press("ENTER")
      //  await page.keyboard.press("Enter");
     //   await page.press("Enter");
      //  await this.this.page.pause();
        await this.aproveok.click();
      //  await expect(this.page.getByText('La solicitud ha pasado a la siguiente etapa de manera exitosa.')).toBeTruthy();

        
    }

    async closereview(){
     //   await this.aproveok.click();
        await this.closeone.click();
        await this.menuone.click();
        await this.closetwo.click();

      //  await this.this.page.pause();


    }
}