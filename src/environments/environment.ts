// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'development',
  apiBaseUrl: '',
  fireBase: {
    apiKey: 'AIzaSyCIt-4vgB824Nmu6okOhrRDJwGZbXVd4Gs',
    authDomain: 'onlineshop-opa.firebaseapp.com',
    databaseURL: 'https://onlineshop-opa.firebaseio.com',
    projectId: 'onlineshop-opa',
    storageBucket: 'onlineshop-opa.appspot.com',
    messagingSenderId: '151126154544'
  }
};
