// Las literales en los objetos
/**
 * OBJECT LITERALS
 * 
 * Se trata de la forma de invocar a una variable dentro de la estructuracion de un objeto JSON 
 */


const getJson = (param1 = '', param2 = 0, param3 = 0) => {
    return {
        param1,
        param2,
        param3
    }
}

const object1 = getJson();
const object2 = getJson('noe', 3, 33);
console.log(object1);
console.log(object2);