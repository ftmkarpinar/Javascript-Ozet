/*
?SORULAR
1- Türkçe 40
2- Matematik 40
3- Sosyal Bilimler 20
4- Fen Bilimleri 20

--> 100 puanı ösym veriyor
--> Okul max 60 puan veriyor
*/

let turkceDogru, turkceYanlis = 0;
let matDogru, matYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuani = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz.." +yeniSatir
+ "1- Puan Hesapla" +yeniSatir
+ "2- Çıkış Yap";

let secim = prompt(mesaj);

switch(secim)
{
    case "1":
        turkceDogru = Number(prompt("Türkçe doğru sayısı"));
        turkceYanlis = Number(prompt("Türkçe yanlış sayısı"));

        matDogru = Number(prompt("Matematik doğru sayısı"));
        matYanlis = Number(prompt("Matematik yanlış sayısı"));

        sosyalDogru = Number(prompt("Sosyal Bilimler Doğru Sayısı"));
        sosyalYanlis = Number(prompt("Sosyal Bilimler yanlış sayısı"));

        fenDogru = Number(prompt("Fen Bilimleri doğru sayısı"));
        fenYanlis = Number(prompt("Fen bilimleri yanlış sayısı"));

        okulPuani= Number(prompt("Okul puanınızı giriniz:"));

        let dogruSayisi = turkceDogru+matDogru+sosyalDogru+fenDogru;
        let yanlisSayisi = turkceYanlis+matYanlis+sosyalYanlis+fenYanlis;
        let kalanDogruSayisi = dogruSayisi - (yanlisSayisi/4);
        puan = (kalanDogruSayisi*4) + 100 + okulPuani;
        alert("TYT Puanınız: " + puan);
    break;

    case "2":
        alert("Uygulamadan çıkış yapıldı");
    break;

    default:
        alert("Lütfen geçerli aralıkta bir değer giriniz!");
    break;
}