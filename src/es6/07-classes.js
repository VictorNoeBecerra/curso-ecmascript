class user {
    constructor(data){
        //** Este método se invoca o ejecuta al usar la palabra reservada 'New ...' */
        console.log(`User constructor(data): ${data || 'No hay data'}`);
    }

    getSurrent (saludo){
        console.log(saludo || 'Saludo mamawisky')
    }
} 


const user1 = new user('Órale compa!!!')

user1.getSurrent()


class agent {
    constructor (name, age){
        this.name = name,
        this.age = age
    }

    getHello(){
        return `Hello! my name is ${this.name}`
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n;
    }
}
