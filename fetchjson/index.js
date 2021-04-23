"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://reqres.in/api/users/2';
axios_1["default"].get(url).then(function (res) {
  const user = res.data;
  const ID = user.data.id;
  const email = user.data.email;
  const name = user.data.first_name;

  console.log(`
    my id is: ${ID}
    my email is: ${email}
    my name is: ${name}
  `);
});
