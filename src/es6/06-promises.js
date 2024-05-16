// Es la forma para indicar a la logica como comportarse con respecto a las demás sentencias.



const anotherFunction = (pas = true)=>{
    return new Promise((resolve, reject) => {
        if(pas){
            setTimeout(() => {
                resolve('Heeeeeey')
            }, 2500);
        }
        else{
            reject('Buuuuuh')
        }
    })
}


const flujo1 = async(correct)=>{
    try {
        const respuesta = await anotherFunction(correct)
        console.log('respuesta: ', respuesta)
    } catch (error) {
        console.error('error: ', error);
    }
}

const flujo2 = (correct)=>{
    anotherFunction(correct)
    .then(res => {
        console.log('respuesta:', res)
    })
    .catch(err=>{
        console.error('Errorsote: ', err)
    })
}


flujo1()
flujo2()
flujo1(false)
flujo2(false)