if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    registration.addEventListener('updatefound', function() {
      var installingWorker = registration.installing;
      console.log('Sw working:',
        installingWorker);
    });
  })
  .catch(function(eror) {
    console.log('Sw failed:', eror);
  });
} else {
  console.log('Sw is supported.');
}
