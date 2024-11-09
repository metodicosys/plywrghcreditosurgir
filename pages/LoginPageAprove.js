exports.LoginPageAprove = class LoginPageAprove{

    constructor(page){
        this.page = page;
        this.username_textbox = page.getByRole('combobox', { name: 'Usuario' });
        this.password_textbox = page.getByRole('combobox', { name: 'Contraseña' });
        this.login_button = page.getByRole('button', { name: 'Ingresar' });

        //Role
        this.rol_textbox = page.getByRole('combobox', { name: 'Rol Seleccione...' });
        this.role_textbox = page.getByText('JEFE DE EQUIPO INDIVIDUAL');
        this.agency_textbox = page.getByText('AgenciaSeleccione...');
        this.agencye_textbox = page.getByText('ATE INDIVIDUAL');
        this.role_button = page.getByRole('button', { name: 'Ingresar' });

        //Filtro   
        this.filtro_checkG=page.locator('mat-form-field').filter({ hasText: 'FiltroGrupal, Individual, OFICINA SAN JUAN DE LURIGANCHO' }).locator('mat-icon svg');
        this.filtro_checkI=page.locator('.cdk-overlay-backdrop');
       
    }

    async gotoLoginPage(){
        await this.page.goto('https://witty-ocean-0f699e810.4.azurestaticapps.net/auth/login');
    }

    async login(username, password){
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();

    }

    async rol(){
        await this.rol_textbox.click();
        await this.role_textbox.click();
        await this.agency_textbox.click();
        await this.agencye_textbox.click();
        await this.role_button.click();

    }

    async filtro1(){
        await this.filtro_checkG.click();
        await this.filtro_checkI.click();


    }


}