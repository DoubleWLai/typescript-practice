import axios from 'axios';

const url = 'https://reqres.in/api/users/2';

interface User {
  id: number;
  email: string;
  first_name: string;
}

axios.get(url).then((res) => {
  const user = res.data.data as User;
  const id = user.id;
  const email = user.email;
  const name = user.first_name;

  console.log(`
    my id is: ${id}
    my email is: ${email}
    my name is: ${name}
  `);
});