let mesaj =
`
Migros'a hoşgeldiniz.
Money kartınız var mı?
1- Evet
2- Hayır
`;


const urunler = [
    //tutar=360
    {
        urunIsmi : "Süt",
        fiyat : 40
    },
    {
        urunIsmi : "Avokado",
        fiyat : 70
    },
    {
        urunIsmi : "Kuşbaşı",
        fiyat : 250
    }
]


let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    let isim = prompt("Adınızı giriniz: ");
    let soyisim = prompt("Soyadınızı giriniz: ");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri Bilgileri: ${musteri.getIsım} ${musteri.getSoyisim}
        Ödenecek Tutar: ${odenecekTutar}
        `);

}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödenecek Tutar: ${odenecekTutar}`);
}
