module.exports = {
    keycloak: {
      enabled: true,
    },
  };
//   module.exports = ({ env }) => ({
//     // ...
//     providers: {
//       keycloak: {
//         provider: 'keycloak',
//         providerOptions: {
//           keycloak: {
//             clientId: env('angular-test'),
//             realm: env('Dev'),
//             baseUrl: env('http://localhost:8080/auth',),
//           },
//         },
//         autoRegister: true,
//       },
//     },
//     // ...
//   });
  