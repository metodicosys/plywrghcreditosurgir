const { expect } = require("@playwright/test");

exports.CreditDocuments = class CreditDocuments{

    constructor(page){
        this.page = page;
        //Documents
       this.searchtxt = '#mat-input-2';
     //  this.search = page.getByRole('combobox', { name: 'Buscar' });  //46823496  //09957250  // 29612923 sinaval
       this.searchbtn = '#Icons_Functional_ic_search';
       this.searchdown = page.getByTitle('Filtro y búsqueda').locator('div').filter({ hasText: 'Filtro y búsqueda' }).locator('svg');
       this.headerdown = page.getByTitle('Panorama').locator('svg');
       this.nextbtn = '#lcrd';

       this.duc = page.locator('list-documents').getByText('Documento único de crédito');
     //  this.duc = page.getByText('Documento único de crédito');
       this.constotroi =  page.getByText('Constancia de otros ingresos');
       this.certi =  page.getByText('Certificado Desgravamen');
       this.experian = page.getByText('Foto Experian');
       this.dochousen =  page.getByText('Documento de domicilio');          
       this.pcustomer =  page.getByText('Foto cliente');
       this.panverso =  page.getByText('Foto DNI anverso');
       this.preverso =  page.getByText('Foto DNI reverso');
       this.selfien = page.getByText('Selfie del negocio');
       this.faccount = page.getByText('Foto de cuenta de ahorros');
       this.pobra = page.getByText('Presupuesto de obra');
       this.soptative = page.getByText('Seguro optativo vida');
       this.rrse = page.getByText('Reporte RSE individual');
       this.cpatrimonio = page.getByText('Constancia de patrimonio');
       this.fparticipa = page.getByText('Firma participante');
      // this.inversion = page.getByText('Revision inversion proforma');
       this.certip =  page.getByText('Desgravamen porcentual');

       
       const locator = page.locator('div.warning');

       this.ducname = page.getByText('Documento único de crédito', { exact: true });
       this.ducame = page.locator('/html/body/app-root/app-home/surigr-admin-template/surgir-sidenav/mat-drawer-container/mat-drawer-content/app-document/div/div[1]/surgir-tabs/mat-tab-group/div/mat-tab-body[1]/div/app-documents/div/div/div[2]/div/div[1]/div[2]/div[2]/div[2]');
      
       
       
       
    }

    async documents(){

        //cabecera
        const namecustomer = await this.page.$$("//div[@class='title-document']");
        const linkname = [];
            for (const names of namecustomer)
           {
              const namesall = await names.textContent(); //0k
              const quitandoespacioname = await namesall.replace(/\s+/g,' ').trim()
              linkname.push(quitandoespacioname);
      
            }
           console.log(" ");
           console.log("Cabecera bandeja");
           console.log("NOMBRE DE CLIENTE:",linkname);

        const dnicustomer = await this.page.$$("//span[@class='my-auto']");
        const datadniy = [];
            for (const dnisy of dnicustomer)
            {
                const dnially = await dnisy.textContent(); //0k
                const quitandoespaciodniy = await dnially.replace(/\s/g,' ',' ').trim()
            //    const dniy = quitandoespaciodniy.substring(0);
                datadniy.push(quitandoespaciodniy);
        
            }
            console.log("DNI DE CLIENTE:",datadniy);
            const numdn = datadniy[0];
            const numerodnid = numdn.substring(13,5); // solo numero de DNI
       //   console.log("DNI:",numerodnid);
            console.log(" ");


            const nsolicitud = await this.page.$$("//div[@class='dates-header']");
            const datasol = [];
                for (const sold of nsolicitud)
                {
                    const solally = await sold.textContent(); //0k
                    const quitandoespacsol = await solally.replace(/\s/g,' ',' ').trim()
                //    const dniy = quitandoespaciodniy.substring(0);
                    datasol.push(quitandoespacsol);
            
                }
                console.log("DNI DE CLIENTEXXX:",datasol);
            //    const numdn = datadniy[0];
           //     const numerodnid = numdn.substring(13,5); // solo numero de DNI
           
         //   console.log("DNI:",numerodnid);
            console.log(" ");


         //Lista de documentos a revisar
       // const documento2 = await this.page.$$("//div[@class='label-complete w-100 ng-star-inserted']");
        const documento2 = await this.page.$$("//div[@class='description-ls-doc']");
        const linkdoc2 = [];

            for (const documents2 of documento2)
            {
                const revisandodoc2 = await documents2.textContent(); //0k
                const quitandoespaciodoc2 = await revisandodoc2.replace(/\s+/g,' ').trim()
                linkdoc2.push(quitandoespaciodoc2);
                
            }
           console.log("Listado de Documentos:",linkdoc2);   //listado de documentos

         //  const dataduc = linkdoc2;
           for (const ducs of linkdoc2)
           {
               const ducall = await ducs; //0k
           //    console.log("DATOAAA SSS DUC:",ducall);
           /*
               if(ducall=='Documento único de crédito')
                   {
                       console.log("DATOSSS DUC:",ducall);
                   }else{
                        console.log("No hay DUC");
                   }

                if(ducall=='Foto Experian')
                {
                    console.log("DATOSSS Experian:",ducall);
                }else{
                        console.log("No hay EXPERIAN");
                }*/


                switch (ducall) {
                    case 'Documento único de crédito':
                        console.log("DUC");
                        await this.duc.click();
                        const ducx = await this.page.$$("//div[@class='w-100 dates-info ng-star-inserted']");
                        const dataduc = [];
                            for (const ducs of ducx)
                            {
                                const ducall = await ducs.textContent(); //0k
                                const quitandoespacioduc = await ducall.replace(/\s/g,' ',' ').trim()
                                const duct = quitandoespacioduc.substring(0);
                                dataduc.push(duct);
                        
                            }
                        console.log("DATOS DUC:",dataduc);
                        break;
                    
                    case 'Constancia de otros ingresos':
                        console.log("Constancia de otros ingresos");
                        await this.constotroi.click();
                        break;

                    case 'Foto Experian':
                        console.log("Foto Experian");
                        await this.experian.click();
                        break;
                        
                    case 'Documento de domicilio':
                        console.log("Documento de domicilio");
                        await this.dochousen.click();
                        break; 
                  
                    case 'Foto cliente':
                        console.log("Foto cliente");
                        await this.pcustomer.click();
                        break;
                        
                    case 'Foto DNI anverso':
                        console.log("Foto DNI anverso");
                        await this.panverso.click();
                        break; 
                    
                    case 'Foto DNI reverso':
                        console.log("Foto DNI reverso");
                        await this.preverso.click();
                        break;  

                    case 'Selfie del negocio':
                        console.log("Selfie del negocio");
                        await this.selfien.click();
                        break;

                    case 'Foto de cuenta de ahorros':
                        console.log("Foto de cuenta de ahorros");
                        await this.faccount.click();
                        break; 
                    
                    case 'Presupuesto de obra':
                        console.log("Presupuesto de obra");
                        await this.pobra.click();
                        break;

                    case 'Seguro optativo vida':
                        console.log("Seguro optativo vida");
                        await this.soptative.click();
                        break;

                    case 'Reporte RSE individual':
                        console.log("Reporte RSE individual");
                        await this.rrse.click();
                        break; 

                    case 'Constancia de patrimonio':
                        console.log("Constancia de patrimonio");
                        await this.cpatrimonio.click();
                        break;

                    case 'Firma participante':
                        console.log("Firma participante");
                        await this.fparticipa.click();
                        break;

                    case 'Desgravamen porcentual':
                        console.log("Desgravamen porcentual");
                        await this.certip.click();
                        break;
/*
                    case 12:
                        console.log("Foto de cuenta de ahorros");
                        break;

                    case 13:
                        console.log("Seguro optativo vida");
                        break; 
                    
                    case 14:
                        console.log("Firma participante");
                        break;

                   case 15:
                        console.log("Revision inversion proforma");
                        break;

                    case 16:
                        console.log("Desgravamen porcentual");
                        break;*/

                    default:
                        console.log("Otro documento");
                        
                }


 
       
           }
     //  console.log("DATOS DUC:",dataduc);

        
    }



    /*
    async checkduc(){
        await this.duc.click();

        const ducx = await this.page.$$("//div[@class='w-100 dates-info ng-star-inserted']");
        const dataduc = [];
            for (const ducs of ducx)
            {
                const ducall = await ducs.textContent(); //0k
                const quitandoespacioduc = await ducall.replace(/\s/g,' ',' ').trim()
                const duct = quitandoespacioduc.substring(0);
                dataduc.push(duct);
        
            }
        console.log("DATOS DUC:",dataduc);

        const numdocd = dataduc[0];
        const numerodnix = numdocd.substring(29,21);

        console.log ("IndiceX", dataduc[0]); // muestra el valor del indice
      //  console.log ("Detall_DNI:", numdocd.substring(29,21)); //desde 15
        console.log ("Detall_DNI:", numerodnix);
        console.log (" ");
        
        await expect(this.page.locator('list-documents').getByText('Documento único de crédito')).toHaveText('Documento único de crédito');
        await expect(this.page.locator("div[class='personal-information'] div:nth-child(2) div:nth-child(2)")).toBeVisible();
        await expect(this.page.locator('body > app-root:nth-child(1) > app-home:nth-child(2) > surigr-admin-template:nth-child(1) > surgir-sidenav:nth-child(2) > mat-drawer-container:nth-child(1) > mat-drawer-content:nth-child(5) > app-document:nth-child(2) > div:nth-child(1) > div:nth-child(1) > surgir-tabs:nth-child(2) > mat-tab-group:nth-child(1) > div:nth-child(2) > mat-tab-body:nth-child(1) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)')).toBeVisible();
      //  await expect(numerodnix).toBe(documents.numerodnid);


    }*/

    async chckcerti(){
        await this.certi.click();
        const certix = await this.page.$$("//div[@class='w-100 dates-info ng-star-inserted']");

        const datacerti = [];
        for (const certis of certix)
        {
            const certiall = await certis.textContent(); //0k
            const quitandoespaciocerti = await certiall.replace(/\s/g,' ',' ').trim()
            const certit = quitandoespaciocerti.substring(0);
            datacerti.push(certit);
    
        }
    console.log("DATOS CERTIFICADO:",datacerti);

    const numdocdd = datacerti[0];
    const numerodnixx = numdocdd.substring(29,21);

    console.log ("IndiceY", datacerti[0]); // muestra el valor del indice
  //  console.log ("Detall_DNI:", numdocd.substring(29,21)); //desde 15
    console.log ("Detalle_DNI:", numerodnixx);
    console.log (" ");
   // await expect(this.page.locator('list-documents').getByText('Documento único de crédito')).toHaveText('Documento único de crédito');
   // await expect(this.page.locator("div[class='personal-information'] div:nth-child(2) div:nth-child(2)")).toBeVisible();
   // await expect(this.page.locator('body > app-root:nth-child(1) > app-home:nth-child(2) > surigr-admin-template:nth-child(1) > surgir-sidenav:nth-child(2) > mat-drawer-container:nth-child(1) > mat-drawer-content:nth-child(5) > app-document:nth-child(2) > div:nth-child(1) > div:nth-child(1) > surgir-tabs:nth-child(2) > mat-tab-group:nth-child(1) > div:nth-child(2) > mat-tab-body:nth-child(1) > div:nth-child(1) > app-documents:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)')).toBeVisible();

    }


    async checkexperian(){
        await this.experian.click();
        const experx = await this.page.$$("//div[@class='w-100 dates-info ng-star-inserted']");
        

        const dataexperi = [];
        for (const experi of experx)
        {
            const experiall = await experi.textContent(); //0k
            const quitandoespacioexperi = await experiall.replace(/\s/g,' ',' ').trim()
            const experit = quitandoespacioexperi.substring(0);
            dataexperi.push(experit);
    
        }
        console.log("DATOS EXPERIAN:",dataexperi);

        const numdocdde = dataexperi[0];
        const segmndde = dataexperi[1];
        const calificax = numdocdde.substring(20,14); //desde 14 hasta 20
        const segmentox = segmndde.substring(12,10); //desde 10 hasta 12

        console.log ("Calificación:", calificax); // muestra el valor del indice
        console.log ("Segmento:",segmentox);
        console.log (" ");


    }

    async checkdochouse(){
        await this.dochousen.click();

    }

    async checkfotocustomer(){
        await this.pcustomer.click();
    }

    async checkfotoanverso(){
        await this.panverso.click();

    }

    async checkfotoreverso(){
        await this.preverso.click();

    }

    async checkselfie(){
        await this.selfien.click();

    }

    async checkfotoaccount(){
        await this.faccount.click();

    }

    async checkpresobra(){
        await this.pobra.click();
        await expect(this.page.locator('list-documents').getByText('Presupuesto de obra')).toHaveText('Presupuesto de obra');
    
    }

    async checksegoptative(){
        await this.soptative.click();
        await expect(this.page.locator('list-documents').getByText('Seguro optativo vida')).toHaveText('Seguro optativo vida');
    }

    async checkRseIndiv(){
        await this.rrse.click();

    }

    async checkcpatrimonio(){
        await this.cpatrimonio.click();

    }

    async checkfirmapart(){
        await this.fparticipa.click();

    }

    async checkinversion(){
        await this.inversion.click();

    }

    async checkdesgporcentual(){
        await this.certip.click();

    }

}