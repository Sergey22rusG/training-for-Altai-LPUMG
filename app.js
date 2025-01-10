if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      console.log('Service Worker зарегистрирован:', registration);
    })
    .catch(function(error) {
      console.log('Ошибка регистрации Service Worker:', error);
    });
}