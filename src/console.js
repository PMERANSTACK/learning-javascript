console.log("Hello World!...");
console.log(3+5);
console.warn("This is a warning message");
console.error("This is a error message");
console.log("%c I am a bad coder", "background:blue");
console.log("%c Stop!", "font-size:3.5rem; color:red");

var obj= {
    "coder_1": {"name": "sumit", "language": "java script", "rank": 3},
    "coder_2": {"name": "Binod", "language": "java", "rank": 1},
    "coder_3": {"name": "Rony", "language": "c++", "rank": 2}
};

console.log(obj);
console.table(obj);

console.assert(2+3 === 6, "What!!!");
console.assert(2+3 === 5, "What!!!");

console.time("I am a timer");

checkTime =()=> {
    console.time("timer_1");
    array = [8,76,5,2,4,59];
    array.sort();
    console.timeEnd("timer_1");
}

checkTime();

