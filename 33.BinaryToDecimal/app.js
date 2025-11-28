//Binary To Decimal (İkilik sayıdan 10'luk sayıya çevirme)
//öncelikle bir sayının üssünü almak için math sınıfındaki pow metodunu kullanacağız

let binary = "11010";

function convertBinaryToDecimal(binary)
{
    let toplam = 0;
    let ust = 0;

    for(let i = binary.length-1; i>=0; i--)
    {
        toplam += Number(binary.charAt(i) * Math.pow(2,ust));
        ust++;
    }
    console.log("Sonuç: " + toplam);
}
convertBinaryToDecimal(binary);

