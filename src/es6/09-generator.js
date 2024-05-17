function* iterate(array) {
  for (let item of array) {
    yield item;
  }
  yield 'Hola'
  return 'finish-him!'
}

const it = iterate(["Fresa", "cocoloco", "palma", "cabringa"]);

console.log(it);

for (let _it of it) {
  console.log(_it);
}

console.log(
    
    it.next()
);
