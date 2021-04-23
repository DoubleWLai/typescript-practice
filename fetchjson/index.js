"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://reqres.in/api/users/2';
axios_1["default"].get(url).then(function (res) {
  const user = res.data.data;
  const ID = user.id;
  const email = user.email;
  const name = user.first_name;

  console.log(`
    my id is: ${ID}
    my email is: ${email}
    my name is: ${name}
  `);
});
