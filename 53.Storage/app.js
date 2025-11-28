//**************************Session Storage****************** */

//Değer Ekleme
// sessionStorage.setItem("1", "Fatma");
// sessionStorage.setItem("55", "İrem");
// sessionStorage.setItem("268", "Özlem");
// sessionStorage.setItem(569,37); //int gibi görünsede string kaydolur

//Değer Silme
// sessionStorage.removeItem("268");

// let value = sessionStorage.getItem("1");
// if(value == null)
// {
//     console.log("Değer Bulunamadı!");
// }
// else
// {
//     console.log("Değer Bulundu: ", value);
// }

//Hepsini Silme
// sessionStorage.clear();

// let value = sessionStorage.getItem(569);
// console.log(typeof value);

//Session Storage - Array Yazdırma

// let names = ["Fatma", "İrem", "Özlem", "Elif", "Bircan"];
// sessionStorage.setItem("names", JSON.stringify(names));

// let value = JSON.parse(sessionStorage.getItem("names"));
// console.log(value);





//**************************Local Storage****************** */
//sesion'ın aynısıdır. Tek farkları sessionStorage bilgisayarı kapatıldığı an bilgileri temizler

//Değer ekleme
// localStorage.setItem("motion1", "Push up");
// localStorage.setItem("motion2", "Barfix");
// localStorage.setItem("motion3", "Burpee");
// localStorage.setItem("motion4", "Squat");

//Değeri almak
// let value = localStorage.getItem("motion2");
// console.log(value);  