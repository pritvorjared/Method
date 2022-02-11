let str = "Hello";

console.log(str.toLowerCase());
console.log(str.toUpperCase());

console.log(str.indexOf("q"));
console.log(str.indexOf("l"));
console.log(str.indexOf("h"));
console.log(str.indexOf("H"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
// - первый аргумент 6 с какого места начать вырезать,
// - второй аргумент 11 в каком месте закончить вырезание.
// - если указать только первый аргумент то строчка вырежится до конца

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));
// - первый аргумент 6 с какого места начать вырезать,
// - второй аргумент 5 означает сколько символов нужно вырезать

const num = 12.2;
console.log(Math.round(num));
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
