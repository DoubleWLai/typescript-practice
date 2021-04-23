import axios from 'axios';

const url = 'https://reqres.in/api/users/2';

axios.get(url).then((res) => {
  console.log(res.data);
});