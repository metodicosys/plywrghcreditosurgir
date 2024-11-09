const {test, expect, request} = require('@playwright/test');
const loginPayLoad = {login:"asistente01",password:"Surgir02*"};
//let token;
const sessionId="";

test ('test @login @fast', async({page}) => {
    {
        await page.goto("https://witty-ocean-0f699e810.4.azurestaticapps.net/auth/login")
        console.log(await page.title())
        await page.getByRole('combobox', { name: 'Usuario' }).fill("asistente01");
        await page.getByRole('combobox', { name: 'Contraseña' }).fill("abc");
        await page.getByRole('button', { name: 'Ingresar' }).click();
   // }

   // annotation: {
        const apiContext= await request.newContext();
    //    const loginResponse = await apiContext.post("https://witty-ocean-0f699e810.4.azurestaticapps.net/auth/login",
        const loginResponse = await apiContext.post("https://stg.api.authentication.saf-pe.cobiscloud.com/users/v1/auth/authentication",

                {
                   // data: loginPayLoad,
                    data: {
                        'authentication': 
                        {'login' : 'asistente01',
                        'password' : 'Surgir02*'}
                    },
                    headers:{
                        'Content-Type' : 'application/json',
                        'x-api-key' : 'swGwRN7X65XLuBqFFsthpwxMjhXjxL9CrUmvtW80',
                        'x-end-user-login' : 'asesorqa4',
                        'x-request-id' : '4f9aa743-0cad-46f0-b055-c42e0ab6e216',
                        'x-end-user-terminal' : '186.28.75.10',
                        'x-end-user-request-date-time' : '2021-04-26T23:00:27Z'

                    },
                
                })

        //    expect(loginResponse.ok()).toBeTruthy();
            const loginResponseJson = await loginResponse.json();
            console.log(loginResponseJson);
          //  token = loginResponseJson = await loginResponseJson.json();
         //   sessionId=loginResponseJson.session;
          //  console.log(sessionId);
 //   }

}

})
















