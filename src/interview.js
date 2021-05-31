var myArray =["a", "b", "c", "d", "e"];

myArray.push("end");
myArray.unshift("start");
console.log(myArray);

/** Convert the code ES6 */
var myArrayb =["a", "b", "c", "d", "e"];

myArrayb = ["start", ...myArrayb, "end"]
console.log(myArrayb);

/****************
 * How do create  a private variable in Javascript?
 */

function secretVariable(){
    var private = "Secret Key";
    return function(){
        return private;
    }
}

var getPrivateVariable = secretVariable();
console.log(secretVariable());
console.log(secretVariable()());
console.log(getPrivateVariable());

/**
 *  what  ia the Output
 */

var num = 4;
function outer(){
    var num = 2;
    function inner(){
        num++;
        var num = 3;
        console.log(num)
    }
    inner();
}
var outera = outer();
outera;

/**
 *  what is the output and to rectify it
 */

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function(){
        return this._name
    }
}

var stoleSecretIdentity = hero.getSecretIdentity;
var stoleSecretIdentitybind = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());
console.log(stoleSecretIdentitybind());
console.log(hero.getSecretIdentity());