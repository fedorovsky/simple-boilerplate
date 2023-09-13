import './initSwiper';
import * as $ from 'jquery';

const asyncModule = import('./asyncModule');

console.log('ENV', process.env.NODE_ENV);

asyncModule.then(({ sum }) => {
  console.log('sum', sum);
});

$(() => {
  console.log('jQuery document ready');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log(
          'Service Worker зарегистрирован с успешно с областью видимости:',
          registration.scope,
        );
      })
      .catch((error) => {
        console.error('Ошибка при регистрации Service Worker:', error);
      });
  });
}
