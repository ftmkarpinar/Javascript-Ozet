//ASENKRON PROBLEMİ 

//http istekleri

const users = [
    {
        userId: 5,
        post: "Fatma post 1"
    },
    {
        userId: 5,
        post: "Fatma post 2"
    },
    {
        userId: 5,
        post: "Fatma post 3"
    },
    {
        userId: 6,
        post: "İrem post 1"
    },
    {
        userId: 7,
        post: "Bircan post 1"
    }
]

//user ıd
//post by user ıd

//senkrona çevireceğiz
//callpack - promise - async await

function getUserId(callback){
    setTimeout(() => {
        //servise gittk ve cevabı aldık
        // return 5;
        let userId = 5;
        callback(userId);
    }, 1000);
}

function getPostByUserId(userId){
    //gerçekk bir rest api ye istek atılacak
    setTimeout(() => {
        users.forEach((user)=>{
            if(user.userId===userId){
                console.log(user.post);
            }
        })
    }, 500);
}

getUserId(getPostByUserId);
// let userId = getUserId();
// getPostByUserId(userId);