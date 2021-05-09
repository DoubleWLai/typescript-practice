import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'aaaaabbbbbccccc', age: 0 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
