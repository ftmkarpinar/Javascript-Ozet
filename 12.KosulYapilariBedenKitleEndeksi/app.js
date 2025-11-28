//Beden Kitle Endeksi Hesaplama

 let kilo = Number(prompt("kilonuzu giriniz: "));
 let boy = Number(prompt("Boyunuzu m cinsinden giriniz: "));

 let sonuc = kilo/(boy*2);

 if(sonuc < 18.5)
 {
    console.log("İdeal kilonun altındasınız endeksiniz: " + sonuc);
 }
 else if(sonuc >= 18.5 && sonuc <= 24.9)
 {
    console.log("İdeal kilodasınız endeksiniz: " + sonuc);
 }
 else if(sonuc >= 25 && sonuc <= 29.9)
{
    console.log("İdeal kilonun üstündesiniz endeksiniz: " + sonuc);
}
else if(sonuc >= 30 && sonuc <= 39.9)
{
    console.log("İdeal Kilonun çok üstündesiniz (obez) endeksiniz: " + sonuc);
}
else if(sonuc >= 40)
{
    console.log("İdeal kilonun çok üstündesiniz (morbid obez) endeksiniz: " + sonuc);
}

