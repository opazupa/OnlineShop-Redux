// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'development',
  apiBaseUrl: '',
  fireBase: {
    apiKey: 'AIzaSyDeRcHCw0Z5_9LVrGxbLewMzyqilAMElOw',
    authDomain: 'onlineshop-opa-redux.firebaseapp.com',
    databaseURL: 'https://onlineshop-opa-redux.firebaseio.com',
    projectId: 'onlineshop-opa-redux',
    storageBucket: 'onlineshop-opa-redux.appspot.com',
    messagingSenderId: '334808180356'
  }
};
