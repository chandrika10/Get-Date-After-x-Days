const addDays = require("date-fns/addDays");
function d(days) {
  const date = addDays(new Date(2020, 7, 22), days);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}
console.log(d(4));
module.exports = d;
