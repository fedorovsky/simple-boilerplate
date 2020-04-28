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
