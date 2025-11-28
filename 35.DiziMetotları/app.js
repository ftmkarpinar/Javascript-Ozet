/******************Dizinin Metotları****************/

/*
 push     : Dizinin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner
 unshift  : Dizinin başına eleman ekler, eleman sayısını geriye döner

 pop      : Dizinin sonundan eleman alır, eleman sayısını döner
 shift    : Dizinin başından eleman siler, eleman sayısını döner

 splice(index, incdex)   : Eleman eklemek ve silmek için kullanılır

 tostring : Diziyi stringe çevirir
 join     : Diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz

 concat   : Dizileri birleştirmek için kullanılır
 slice(dilimlemek) : Diziyi isteenilen yerden bölüp yeni bir dizi oluşturur.
 length   : Dizinin uzunluğunu verir
 reverse  : Dizinin elemanlarını ters çevirir
 split(bölmek)     : Belirli bir ifadeye göre bölüp diziye çevirmek
 indexOf  : Elemanın index numarasını verir
 includes : Verilen elemanı içeriyor mu ona bakar

*/


// let arabalar = ["bmw", "mercedes", "toyota","renault", "porsche"];
// let arabalar2 = ["tofaş", "cupra"];

//PUSH METODU
// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);


//UNSHİFT METODU
// arabalar.unshift("hundai");
// console.log(arabalar);


//POP METODU
// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);


//SHIFT METODU
// let silinenEleman = arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);
 

//SPLICE METODU
// console.log(arabalar);
// arabalar.splice(4,0,"hundai"); //eklendi
// console.log(arabalar);

// arabalar.splice(1,2); //1.indexten başla 2 eleman sil demek
// console.log(arabalar);


//JOIN METODU
// let stringArabalar = arabalar.join("-");
// console.log(stringArabalar);


//CONCAT METODU
// let birlesmisDizi = arabalar.concat(arabalar2);
// console.log(birlesmisDizi);


//SLICE METODU
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);

