const quote = document.getElementById("quote");
const animeName = document.getElementById("animeName");
const character = document.getElementById("character");
const btn = document.getElementById("btn");

// click the quote button to activate

btn.addEventListener('click', () => {

    async function getQuote(){
        const options = {
            method: 'GET',
            header:{
                'accept': 'application/json',
                'content-type': 'application/json'
            }
        }
        const res = await fetch("https://animechan.xyz/api/random", options);
        const answer = await res.json();
       // console.log(answer.anime);
       
       quote.innerHTML = answer.quote;
       animeName.innerHTML = "Anime Name:" + " " + answer.anime;
       character.innerHTML = "Character:" + " "+ answer.character;
    }

    getQuote();


    /*
    fetch("https://animechan.xyz/api/random")
    .then(response => response.json())
    .then(data => quote.innerHTML = data.quote);
    */
})


