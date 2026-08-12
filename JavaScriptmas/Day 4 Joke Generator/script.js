const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");

// const url='https://api.chucknorris.io/jokes/random';
const url= 'https://v2.jokeapi.dev/joke/Any?type=single';

let getJoke = () =>{
    fetch(url)
    .then(data => data.json())
    .then(item => {
        console.log(item.joke);
        jokeContainer.textContent = item.joke;
        // document.getElementById("joke").innerHTML = item.joke;
    });
}
btn.addEventListener('click', getJoke);
getJoke();