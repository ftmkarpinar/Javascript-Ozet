let urun1 = {
    isim : "ACER Swift",
    kategori : "Teknoloji",
    fiyat : 20.380
}

let urun2 = {
    isim : "ACER Nitro 5",
    kategori : "Teknoloji",
    fiyat : 33.274
}

let urun3 = {
    isim : "ACER Gaming",
    kategori : "Teknoloji",
    fiyat : 37.691
}

let urun4 = {
    isim : "LENOVO V15",
    kategori : "Teknoloji",
    fiyat : 31.999
}

let urun5 = {
    isim : "LENOVO V14",
    kategori : "Teknoloji",
    fiyat : 22.455
}

let urun6 = {
    isim : "LENOVO Ideaped",
    kategori : "Teknoloji",
    fiyat : 18.760
}

let urunler = [urun1,urun2,urun3,urun4,urun5,urun6];
let filreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz: ");

filtreliUrunlerDoldur(urunler);
filtreliUrunleriYazdir(filreliUrunler);

function filtreliUrunlerDoldur(urunler){
    urunler.forEach(function(urun){
   if(urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(),0)){
    filreliUrunler.push(urun);
   }
  });
}

function filtreliUrunleriYazdir(urunler){
    urunler.forEach(function(urun){
        console.log("---------------------------------");
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("---------------------------------");
    });
}