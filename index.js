const url = 'https://api.quotable.io/random';

let qoutetext =document.getElementById("qoute");
let authurtext =document.getElementById("authur");



async function fetchData(url) {
    const data= await fetch(url);
    const advicedata = await data.json();
    let qoute=  advicedata.content;
    let author= advicedata.author;

     qoutetext.innerHTML = qoute;
     authurtext.innerHTML = author;

     
// //     // console.log(advicedata);  
// //     console.log(qoute);
// //     console.log(author);
// //     console.log(qoutetext)


// YOU DIDN'T NEED AN IF STATEMENT TO IMPLEMENT IT
    
// //     if(qoutetext && authurtext){
// //         qoutetext.innerHTML= advicedata.content;
// //         authurtext.innerHTML= advicedata.author;
// //     }
// // }
// //   fetchData(url);

}




// Another way to also do it
// but when running this should take away the click funtionality in the html

// document.getElementById("button").addEventListener('click', () =>
//     fetch('https://api.quotable.io/random')
//         .then(response => response.json())
//         .then(random => qoutetext.innerHTML = `${random.content}`)
// )
