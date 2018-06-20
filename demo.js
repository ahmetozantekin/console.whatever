var console = require('./console.whatever');  

console.lgo("beer");

console.lgo("lgo", "2"); // lgo 2
console.lgo("lgo", "2", "3"); // lgo 2 3 

console.olg("olg", "2"); // olg 2
console.olg("olg", "2", "3"); // olg 3 3

console.glo("glo", "2"); // glo 2
console.glo("glo", "2", "3"); // glo 2 3

console.ogl("ogl", "2"); // ogl 2 
console.ogl("ogl", "2", "3"); // ogl 2 3 

console.lg("lg", "2"); // lg 2 
console.lg("lg", "2", "3"); // lg 2 3 

console.lo("lo", "2"); // lo 2 
console.lo("lo", "2", "3"); // lo 2 3 

console.lgo(2+3 + 'a') // 5a

console.olg(12+5) // 17

console.log('normal fuckin log')