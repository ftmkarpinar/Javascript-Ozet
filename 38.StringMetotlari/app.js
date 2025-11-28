/*****************String Metotları**************/

let kurs = "Modern Web Geliştrime Kursu";
let tarih = 2025;
/**
 *  charAt()
 *  concat()
 *  indexOf()
 *  lastindexof()
 *  toUpperCase()
 *  toLowerCase()
 *  trim()
 *  slice()
 *  substring()
 *  replace()
 *  split()
 *  valueOf()
 *  startWith()
 *  endwith()
 */

//charAT() METODU
let karakter = kurs.charAt(7);
console.log(karakter);
console.log("-----------------");

//concat() METODU
let sonuc = kurs.concat(" ", tarih);
console.log(sonuc);
console.log("-----------------");

//indexOf() METODU
let index = kurs.indexOf("G");
console.log(index);
console.log("-----------------");

//lastindexOf()
let indexKelime = kurs.lastIndexOf("Kursu");
console.log(indexKelime);
console.log("-----------------");

//toUpperCase() toLowerCase() MMETOTLARI
let sonuc2 = kurs.toLowerCase();
let sonuc3 = kurs.toUpperCase();
console.log(sonuc2);
console.log(sonuc3);
console.log("-----------------");

//trim METODU
console.log(kurs.trim()); //Space tuşu ile ne kadar boşluk bırakılırsa bırakılsın onları temizler
//kullanıcı adı vs giriminde boşluk bırakıldığında hata olmaması için trim kullanılır
console.log("-----------------");

//slice METODU - substring Metodu 
//!aynı işlevi görürler
console.log(kurs);
console.log(kurs.substring(7,10));
console.log(kurs.slice(7,10)); //7.indexten başla 10. indexe kadar al
console.log("-----------------");

//replace() METODU
console.log(kurs);
console.log(kurs.replace("Modern", "Güncel"));
console.log("-----------------");

//split metodu
console.log(kurs);
let dizi = kurs.split(" ");
console.log(dizi);
console.log("-----------------");

//Startswith Metodu
console.log(kurs);
console.log(kurs.startsWith("M"));
console.log("-----------------");

//endswith Metodu
console.log(kurs);
console.log(kurs.endsWith("Kursu")); //kelime de harf de geçerli u harfini de yazsak true olur
