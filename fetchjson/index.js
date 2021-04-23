"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://reqres.in/api/users/2';
axios_1["default"].get(url).then(function (res) {
    console.log(res.data);
});
