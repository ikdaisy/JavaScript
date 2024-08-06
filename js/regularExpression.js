let regEx=/hello/
console.log(regEx.test("hello"));
console.log(regEx.test("team hello"));

// =========================

let a=/^hello/
console.log(a.test("hello"));
console.log(a.test("team hello"));

// ======================================
let x=/cat/
console.log(x.test("cat eat rat"));
console.log(x.test("rat eat cheese"));
console.log(x.test("bat eat fruit"));


let y=/^[a-b]at/
console.log(y.test("cat eat rat"));
console.log(y.test("rat eat cheese"));
console.log(y.test("bat eat fruit"));


// =============== cancel the capitalization using i =================

let b=/^[A-Z]at/i
console.log(b.test("cat eat rat"));
console.log(b.test("rat eat cheese"));
console.log(b.test("bat eat fruit"));

// =================== checks whether the last character is same or not $ symbol=====

let e=/fruits$/
console.log(e.test("cat eat rat"));
console.log(e.test("rat eat cheese"));
console.log(e.test("bat eat fruits"));

// ======================dot rep any character after the last character ($)===================

let f =/[a-z].+$/
console.log(f.test("cat eat rat"));
console.log(f.test("rat eat cheese%%%%^^"));
console.log(f.test("bat eat fruits"));
console.log(f.test("bat eat fruitss"));

// ================== ? makes true even if the last character is there or not =============================

let g=/fruits?/
console.log(g.test("cat eat rat"));
console.log(g.test("rat eat cheese"));
console.log(g.test("bat eat fruits"));
console.log(g.test("bat eat fruitsss"));



