import { User } from './models/User';

const collection = User.builduserCollection();

collection.on('change', (): void => {
  console.log(collection);
});

collection.fetch();
