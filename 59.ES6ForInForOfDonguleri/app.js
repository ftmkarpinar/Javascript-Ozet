/*************For in For of Döngüleri************/

let names = ["Fatma", "İrem", "Özlem", "Bircan", "Elif"];

//For in Döngüsü index numarasını verir
//Değişken tanımlama, in, diziİsmi

// for(let name in names){
//     console.log(name, names[name]);
// }



//For of Döngüsü değeri verir
for(let isim of names){
    console.log(isim, names.indexOf(isim));
}
