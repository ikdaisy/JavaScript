

// ==================import one function  (put default keyword after export keyword)=================

// import add from "./modexport.js";
// console.log(add(2,3));


// ================ import all functions together (destructuring way)=======================

import { add,mul,div } from "./modexport.js";
console.log(add(2,3));
console.log(mul(2,4));
console.log(div(8,4));


// ================== another version to import all functions together=================

// import * as data from "./modexport.js";
// console.log(data.add(2,3));
// console.log(data.mul(2,4));
// console.log(data.div(8,4));

