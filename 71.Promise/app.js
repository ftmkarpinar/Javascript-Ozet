//-----------PROMİSE----------


// const promise1 = new Promise((resolve, reject)=>{
//     if(check){
//         resolve("Promise başarılı");
//     }
//     else{
//         reject("Promise başarısız...");
//     }
// })

// console.log(promise1);




// {let check = true;

// function createPromise(){
//     return new Promise((resolve, reject)=>{
//         if(check){
//             resolve("Promise'te herhangi bir sıkıntı yok")
//         }
//         else{
//             reject("Sıkıntı büyük :)")
//         }
//     })
// }

// createPromise()
// .then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>console.log("Her zaman çalışır"))}



// PROMİSE + XMLHTTPREQUEST

function readStudents(url){

    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", ()=>{
            if(xhr.readyState===4 && xhr.status===200){
                resolve(JSON.parse(xhr.responseText));
            }
        })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url),
        xhr.send();
    })
}

// readStudents("students.json")
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))


function getUsers(url){
    return new Promise((resolve, reject) =>{
        const xhr =  new XMLHttpRequest();
        xhr. addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url)
        xhr.send();
    })
}


function getCommentsByUserID(url){
    return new Promise((resolve, reject) =>{
        const xhr =  new XMLHttpRequest();
        xhr. addEventListener("readystatechange", ()=>{
            try {
                if(xhr.readyState===4 && xhr.status===200){
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url)
        xhr.send();
    })
}


getUsers("https://jsonplaceholder.typicode.com/users/3")
.then((data) => {
    console.log(data);
    return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
})
.then((res) => console.log(res))
.catch((err) => console.log(err))
.finally(() =>{
    //Mail atma kodları yazılır.
})

