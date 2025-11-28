//ASAL SAYI BULMA UYGULAMASI

/*2'den başlayıp sayının yarısına kadar olan kısımda bölünüp bölünmediğine dair
işlem yaparsak otomatik sayının asal olup olmadığını buluruz.*/

//!Burada işlemleri yaparken Math kütüphanesini kullanıcaz. Buçuklu vs olan sayıları tama yuvarlayacağız.

let sayi = Number(prompt("Lütfen bir sayı giriniz: "));
let sonuc = true;

for(let i=2; i<=Math.floor(sayi/2); i++)
{
    if(sayi % i == 0)
    {
        //asal değildir
        sonuc=false;
        break;
    }
}
if(sonuc)
{
    alert(sayi +" asaldır.");
}
else
{
    alert(sayi +" asal değildir!");
}