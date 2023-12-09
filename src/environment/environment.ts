export const environment = {
  production: false,
  clientId: 'c8a69152-9af0-4808-9302-50f9f15ecb18',
  names:{
    signUpSignIn: 'B2C_1_SignIn-SignUp-userflow',
    editProfile: 'B2C_1_ProfileEdit-userflow',
    resetPassword: 'B2C_1_PasswoedReset-userflow'
  },
  authorities: {
    signUpSignIn: {
      authority: 'https://thepreference.b2clogin.com/thepreference.onmicrosoft.com/B2C_1_SignIn-SignUp-userflow'
    },
    editProfile: {
      authority: 'https://thepreference.b2clogin.com/thepreference.onmicrosoft.com/B2C_1_ProfileEdit-userflow'
    },
    resetPassword: {
      authority: 'https://thepreference.b2clogin.com/thepreference.onmicrosoft.com/B2C_1_PasswoedReset-userflow'
    }
  },
  authorityDomain: 'thepreference.onmicrosoft.com',
  redirectUri: 'http://localhost:4200/home',
  endpoint: 'https://localhost:7072/',
  endpointScopes: [ 'https://{YOUR_TENANT_DOMAIN_NAME}/backend/All' ]
};
