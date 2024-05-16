function newUser(name, age, country){
    var name = name || 'Oscar';
    var age  = age || 33;
    var country = country || 'MX';
    console.log(name, age, country);
}


newUser()
newUser('Noe', 26, 'MX')


const nesUserB = (names = 'Noe', edad = 33, country = 'MX')  => {
    console.log(names, edad, country);
}

nesUserB()
nesUserB('Pepe', 24, 'USA');