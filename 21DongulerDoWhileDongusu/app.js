// ! Do while'da koşul sağlamıyor, döngü bir daha çalışmayacak olsa bile en az 1 kere çalışır
// ! Çünkü koşul for ve while döngüsünden farklı olarak kodun en altında bulunur.
// ! Kodlar da yukarıdan aşağı doğru okunduğu için döngü bir kez çalışır koşulun sağlamadığı yere gelince durur.


//1'den 10'a kadar yazdırma

// let sayac = 1;
// do {
//     console.log(sayac);
//     sayac++;
// } while (sayac<=10);



//1'den 20'ye kadar olan tek sayıların toplamı

// let sayac = 1;
// let toplam = 0;

// do{
//     if(sayac % 2 == 1)
//     {
//         toplam += sayac;
//     }
//     sayac++;
// }while(sayac<=20);

// console.log("Toplam: ", toplam);