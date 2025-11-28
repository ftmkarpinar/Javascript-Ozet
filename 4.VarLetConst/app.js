//Var - Let - Const

/*
Javascriptte farklılık olarak diğer programlama
dillerinde olduğu gibi değişken tanımlarken 
tip belirtme (int, string, double, boolean vs) olmuyor. Bütün değişkenler
var, let ve const ile tanımlanır!!

let sayi = 10;
*/


//var ile tanımlanan değişken her zaman function scope içinde olur
//block scope içinde olsa dahi var ile tanımlandığı için functionmuş gibi davranır.
// let ve const block özelliğine sahiptir

function selamVer(){ //function scope
    var selam = "Herkese selamünaleyküm";

    if(true){ //block scope
        let a = 2135;
        
    console.log(a);
    }

    console.log(selam);
}
selamVer(); 