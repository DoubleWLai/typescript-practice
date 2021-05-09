import { Collection } from './models/Collection';

const collection = new Collection('http://localhost:3000/users');

collection.on('change', (): void => {
  console.log(collection);
});

collection.fetch();
