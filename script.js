const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const button = document.querySelector("button")


const url = "https://type.fit/api/quotes";

fetch(url).then(data =>{
    return data.json()
}).then(data =>{
   let datas = data;
   const load = () =>{
     let rand = Math.floor(Math.random()*1500)
    quote.innerText = data[rand].text;
    author.innerText = data[rand].author ? data[rand].author:"Unknown";
   }
   load()
  button.addEventListener("click",load)
}).catch(error =>{
    alert("a error occured while fetching quotesS")
})