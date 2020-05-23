// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage("Hello");
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }


let calc = (a,b) => a + b

console.log(calc(2,3));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));