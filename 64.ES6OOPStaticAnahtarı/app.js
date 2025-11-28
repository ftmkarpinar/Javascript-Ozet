//!STATİC NEDİR?

class Matematik{

    static topla(a,b){
        console.log(a+b);
    }

    cikar(a,b){
        console.log(a-b);
    }

    carp(a,b){
        console.log(a*b);
    }

    bol(a,b){
        console.log(a/b);
    }
}

//Typescript

// const matematik = new Matematik();
// matematik.topla(10,5);

//! Static olarak tanımlanmamışsa NESNE üzerinden erişilir.
//! Static ise CLASS İSMİ üzerinden erişilir.

Matematik.topla(10,8);