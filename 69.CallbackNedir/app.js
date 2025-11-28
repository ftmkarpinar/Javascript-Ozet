//CALLBACK NEDİR?

//timing - event - http istekleri


//Callback: Bir fonksiyonu bir fonksiyona parametre geçerek
//asenkron yapıyı senkrona çeviririz

function getName(callback){
    setTimeout(() => {
        //servisten ismimi getirdi
        let name = "Fatma"; //web servisten geldi
        callback(name);
    }, 1000);
}

function getSurname(name, callback){
    setTimeout(() =>{
        let surname = "Karpınar"; //web servisten geldi
        callback(surname);
    }, 500);
}

const a = ()=>{

}

// getName(getSurname);
getName((name)=>{
    getSurname(name, (surname)=>{
        console.log(name, surname);
    })
});
