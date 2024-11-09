exports.HomePageGeneral = class HomePageGeneral{

    constructor(page){
       this.page = page;

       //home
       this.searchtxt = '#mat-input-2';
       this.searchbtn = '#Icons_Functional_ic_search';
      // this.btnmenu = '#Icons_-_System_-_ic_menu';
       this.btnmenul = page.locator('#Icons_-_System_-_ic_menu');
       this.smenu = page.getByRole('treeitem', { name: 'Atenea' }).locator('a');
       this.hhome = page.getByRole('link', { name: 'Home' });


      // this.searchdown = page.getByTitle('Filtro y búsqueda').locator('div').filter({ hasText: 'Filtro y búsqueda' }).locator('svg');
       //this.headerdown = page.getByTitle('Panorama').locator('svg');
       //this.nextbtn =  page.getByRole('button', { name: 'Ingresar' });
 
    }

    async homeg(){
      await this.btnmenul.click();
      await this.smenu.click();
      await this.hhome.click();


    }

  // Filtro por DNI
  async filtrodnix(numdni){
        await this.page.locator(this.searchtxt).click();
        await this.page.locator(this.searchtxt).fill(numdni);
        await this.page.locator(this.searchbtn).click();
     //   await this.page.locator(this.searchdown).click(); //ocultar buscador
        await this.searchdown.click();
        await this.headerdown.click();

}



}