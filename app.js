let btn = document.querySelector("button");

let url = "https://animechan.xyz/api/random";

btn.addEventListener("click", async function(){
    let final = await getq();
    let p = document.querySelector("p");
    p.innerText = final;
})

async function getq(){
    let res =  await fetch(url);
    let data = await res.json();
    return data.quote;
}