//OOP Giriş

class Insan{ //sınıf

    /*
    1- özellikler
    2- yapıcı metot
    3- function
    */

    constructor(isim, soyisim, yas, maas){  //yapıcı metot
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }

    bilgileriGoster(){
        console.log(`isim: ${this.isim}
            soyisim: ${this.soyisim}
            yas: ${this.yas}
            maas: ${this.maas}`
        );
    }
}

const insan1 = new Insan("Fatma", "Karpınar", 24, 80000);
const insan2 = new Insan("İrem", "Atlı", 25, 85000);

insan1.bilgileriGoster();
insan2.bilgileriGoster();