/*
***************SENKRON-ASENKRON*************

Senkron bir iş bitmeden diğerine geçilmeyen bir programlamadır
Asenkron iki işe aynı anda başlanılarak yapılan her iki işi de aynı anda yapan bir programlamadır.




1- Javascript senkron çalışan bir programlama dilidir. Bazı durumlarda asenkron çalışır
*Timing
*Event
*Http isteklerinde



-----------------CALLBACK - PROMISE - ASYNC & AWAIT--------------
--->> Asenkron yapıları senkrona çevirip yönetiyoruz


*/


// selamla();
// console.log("1");
// console.log("2");
// console.log("fatma");

// function selamla(){
//     console.log("Selam");
// }



console.log("Fatma");

setTimeout(() => {
    console.log("1000ms Süre doldu ve çalıştı")
}, 1000);

setTimeout(() => {
    console.log("500ms Süre doldu ve çalıştı")
}, 500);

setTimeout(() => {
    console.log("750ms Süre doldu ve çalıştı")
}, 750);

console.log("Karpınar");