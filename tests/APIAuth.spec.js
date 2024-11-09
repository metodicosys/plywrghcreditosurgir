const { test, expect } = require('@playwright/test')

    test('Acceder al core', async({ request }) => {

        //Construct the data
     //   const URL = "https://stg.api.authentication.saf-pe.cobiscloud.com/users/v1/auth/authentication"

        const URL = "https://stg.api.authentication.saf-pe.cobiscloud.com/users/v1/auth/authentication"
        const postContent={
                login: 'revisori7', 
                password:'Surgir02*'


        }

        const options = {
            header: {
                Connection: 'keep-alive',
                'Content-type': 'application/json',
                'x-end-user-terminal': '186.28.75.10',
                'x-api-key': 'swGwRN7X65XLuBqFFsthpwxMjhXjxL9CrUmvtW80',
                'x-end-user-login': 'jlimachi',
                'x-request-id': '4f9aa743-0cad-46f0-b055-c42e0ab6e216',
                'x-end-user-request-date-time': '2021-04-26T23:00:27Z'

            }

            /*
            extraHTTPHeaders: {
                Connection: 'keep-alive',
                'Content-type': 'application/json'
           //     'x-end-user-terminal': '186.28.75.10',
            //    'x-api-key': 'swGwRN7X65XLuBqFFsthpwxMjhXjxL9CrUmvtW80',
            //    'x-end-user-login': 'jlimachi',
            //    'x-request-id': '4f9aa743-0cad-46f0-b055-c42e0ab6e216',
            //    'x-end-user-request-date-time': '2021-04-26T23:00:27Z'
            },*/
           

        }
         //   data: postContent

        //Print out the response content
       const response = await request.post(URL, options);
       const responseBody = await response.json();

       //Verification
     //  console.log(JSON.stringify(response))
       console.log(response.status())
       console.log(responseBody)

       //const {status} = response;
       //expect(status).toBe(201)

       expect(response.status()).toBe(201)
       const {login,password} = responseBody;
       expect(login).toBe(postContent.login);
       expect(body).toBe(postContent.body);
       expect(password).toBe(postContent.password);
       

    })
 


