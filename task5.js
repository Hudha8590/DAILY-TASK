let mark=[
    {"a":1,"b":2},
    {"c":3,"d":4},
    {"e":5},
    {"f":6}
]
//QS-a:
const [first,...rest]=mark;
console.log(first);
console.log(rest);
//QS-b:
const [,{c,d},,]=mark;
console.log(c);
console.log(d);
