// src/lib/auth/config.ts
import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'f85d105d-3133-4eac-8551-d956fa23a0d1',
    authority:
      'https://orgauth.b2clogin.com/orgauth.onmicrosoft.com/b2c_1_signup_signin_2',
    knownAuthorities: ['orgauth.b2clogin.com'],
    redirectUri: '/',
    postLogoutRedirectUri: '/',
  },
  cache: {
    cacheLocation: 'localStorage',
  },
};

export const loginRequest = {
  scopes: ['openid', 'offline_access'],
};
