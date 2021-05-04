import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

user.on('sss', () => {
  console.log(111);
});

user.on('sss', () => {
  console.log(111);
});

user.on('ssaaas', () => {
  console.log(111);
});

console.log(user);
