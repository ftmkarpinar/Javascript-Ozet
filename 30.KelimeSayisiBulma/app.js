//Kelime sayısı bulma uygulaması

let metin = "Şuanda Florya İpa Kütüphanesinde Javascript çalışıyorum.";

let harf = prompt("Bir harf giriniz: ");

let sonuc = bul(harf);
alert("Girilen harfin cümle içindeki sayısı: " +sonuc);

function bul(harf)
{
    let toplam = 0;
    for(i=0; i<=metin.length; i++)
    {
        if(metin.charAt(i).toLowerCase()===harf.toLowerCase()) //toLowerCase: Büyük küçük harf hassasiyetinden dolayı büyük harfleri küük harfe dönüştürüp gösterir
        {
            toplam += 1;
        }
    }
    return toplam;
}
