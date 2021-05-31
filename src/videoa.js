
var myObj = {foo: 'bar', func: function(){
    var self = this;
    console.log('out'+this.foo);
    console.log('out1'+self.foo);
    (function(){
        console.log('inner'+this.foo);
        console.log('inner1'+self.foo);
    })();
}}

console.log(myObj.foo);
console.log(myObj.func());

/******************************** */
function display(){
  var a = b  = 100;
 console.log(a);
 console.log(b);
}
/** a will be taken lexical Scope
 * b will  be taken as Global Scope and function Scope
 */
display();
//console.log(a);
console.log(b);

/****************
 * 
 */

var arr1 = [];
for (var i=0; i<3; i++){
    arr1.push(()=> i)
}

console.log(arr1);
console.log(arr1[2]())
console.log(arr1[0]())

/***
 * 
 */

var foxObj = { name: 'fox', eat: {
    food: 'mouse'
}}
var foxObj2 = { ...foxObj};
console.log(foxObj);
foxObj2.eat.food = "dog";
foxObj2.name = 'dog'
console.log(foxObj);
console.log(foxObj2);
/***  */
let mult = (x) => { return x};
 mult = (x) => (y) => { return x * y};
 mult = (x) => (y) => (z) => { return x * y * z};

console.log(mult(2)(3)(4));
console.log(mult(2)(3));