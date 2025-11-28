//    ASYNC AWAİT

//PROMİSE THEN ZİNCİRİ

// then(){
//     then(){
//         then(){
//             console.log("asjad");
//         }
//     }
// }


// async function hello(){
//     return "Hello World";
// }

// console.log(hello());
// hello()
// .then((res) => console.log(res));



// document.querySelector("#button").addEventListener("click", ()=>{
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post) =>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments));
//     })
// })



//Async Await ile yapılışı

document.querySelector("#button").addEventListener("click", async ()=>{
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(post, comments);
})
