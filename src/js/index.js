console.log('ENV', process.env.NODE_ENV);

const asyncModule = import('./asyncModule');

asyncModule.then(({ sum }) => {
  console.log('sum', sum);
});
