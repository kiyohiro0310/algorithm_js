// let f1 = function() {
//     console.log(this);
// }

// f1.call([1,2,3]);
// f1.apply([4,5,6]);

// let obj = {};

// obj.f2 = function(){
//     console.log(this);
// }

// obj.f2.call([7,8,9]);

// let _o = {};

// obj.f2.call(_o);
// obj.f2.call(null);

// let f = function(){
//     console.log(this);
// };

// f.call(1);
// f.call("abc");
// f.call(true);

// let f = function(x, y, z){
//     console.log(x);
//     console.log(y);
//     console.log(z);
//     for(let i = 0; i < this.length; i++) {
//         console.log(this[i]);
//     }
// };

// f.call([4,5,6], 1, 2, 3);
// f.apply([4,5,6], [1,2,3]);

"use strict";

let f = function(){
    console.log(Array.prototype.join.call(arguments));
};

f(1,2,3);

(function(){
    console.log(this);
}).call([1,2,3]);

(function(){
    console.log(this);
}).call(this);