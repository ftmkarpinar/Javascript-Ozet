/****************Map --> key(anahtar) value(değer)***************/

const map1 = new Map();

//SET
// map1.set(1, "Fatma");
// map1.set(true, 5);
// map1.set([1,2,3], {firsName: "Fatma", lastName: "Karpınar"});
// map1.set(true, "10");


map1.set(34, "İstanbul");
map1.set(46, "Elbistan");
map1.set(35, "İzmir");
map1.set(6, "Ankara");

//GET
// console.log(map1.get(46));

//SİZE
// value = map1.size;

//DELETE
// value = map1.delete(34);
// console.log(map1.size);
// console.log(value);

//For OF üzerinde dönebiliriz
for(let [key, value] of map1){
    console.log(key,value);
}

