// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('./sw.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registrado correctamente: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker error al registrarlo: ', err);
//     });
//   });
// }
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', {
      scope: '.' // <--- THIS BIT IS REQUIRED
  }).then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
  });
}