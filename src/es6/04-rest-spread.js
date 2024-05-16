let fruits  = [ 'Uva', 'Naranja', 'Pera', 'Fresa'];
let [a, b] = fruits;
console.log(a, b, fruits[1]);


let user = {username: 'Noeon', age: 33};
let {username, age} = user;
console.log(username, age);



//Spread operator
let person = { name: oscar, age: 28}
let country = 'MX';

let data = { id: 1, ...person, country }
console.log(data);


function  sum(num, ...values) {
    console.log(values);
    console.log(num, values[0]);
    return num * values[0]
}

sum(1,1,2,3,4)