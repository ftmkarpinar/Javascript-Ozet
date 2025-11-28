//Mükemmel Sayı Bulma

//6   -28    -496

//6 = 1,2,3,6 = 12  = 6*2
//Yani bölen sayıların toplamı orjinal sayının 2 katı ise buna mükemmel sayı denir

isPerfectNumaber(6);

function isPerfectNumaber(number)
{
    let toplam = 0;
    for(i=1; i<=number/2; i++)
    {
        if(number%i==0)
        {
            toplam+=i;
        }
    }
    toplam += number;

    if(toplam==number*2)
    {
        console.log("Mükemmel sayıdır..");
    }
    else
    {
        console.log("Mükemmel sayı değildir!!");
    }
}
