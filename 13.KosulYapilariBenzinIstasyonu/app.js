//Benzin İstasyonu

/*
    1. Dizel:  54.43
    2. Benzin: 52.21
    3. Lpg:    25.08


Gelen müşteriden alacağımız bilgiler;
1- Yakıt tipi
2- Yüklenecek yakıt litresi
*/


let dizel = 54.43, benzin = 52.21, lpg = 25.08;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir
+ "2-Benzin" + yeniSatir
+ "3-LPG" + yeniSatir
+ "Lütfen yakıt türünüzü seçiniz";

let yakitTipi = prompt(yakitMetni);

if(yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3")
{
let yakitLitresi = Number(prompt("Yakıt litresini giriniz: "));
let bakiye = Number(prompt("Bakiyenizi giriniz: "));

if(yakitTipi == "1")
{
    let odenecekTutar = dizel*yakitLitresi;
    if(odenecekTutar < bakiye)
    {
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı " + yeniSatir
            + "Kalan bakiye: " + bakiye);
    }
    else
    {
        alert("Bakiyeniz yeterli değildir "+yeniSatir
            + "Ödenecek tutar: " + odenecekTutar + yeniSatir
            + "Bakiye: " + bakiye + yeniSatir
            + "Eksik tutar: " + (odenecekTutar-bakiye));
    }
}
else if(yakitTipi == "2")
{
    let odenecekTutar = benzin*yakitLitresi;
    if(odenecekTutar < bakiye)
    {
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı " + yeniSatir
            + "Kalan bakiye: " + bakiye);
    }
    else
    {
        alert("Bakiyeniz yeterli değildir "+yeniSatir
            + "Ödenecek tutar: " + odenecekTutar + yeniSatir
            + "Bakiye: " + bakiye + yeniSatir
            + "Eksik tutar: " + (odenecekTutar-bakiye));
    }

}
else if(yakitTipi == "3")
{
    let odenecekTutar = lpg*yakitLitresi;
    if(odenecekTutar < bakiye)
    {
        bakiye = bakiye - odenecekTutar;
        alert("Yakıt alma işlemi başarılı " + yeniSatir
            + "Kalan bakiye: " + bakiye);
    }
    else
    {
        alert("Bakiyeniz yeterli değildir "+yeniSatir
            + "Ödenecek tutar: " + odenecekTutar + yeniSatir
            + "Bakiye: " + bakiye + yeniSatir
            + "Eksik tutar: " + (odenecekTutar-bakiye));
    }

}
}
else
{
    alert("Lütfen geçerli bir yakıt türü seçiniz!");
}
