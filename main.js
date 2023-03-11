const jokeDisplay = document.getElementById("jokeDisplay");
const jokeButton = document.getElementById("jokeButton");

jokeButton.addEventListener("click", generateJoke);


async function generateJoke () {
  
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch("https://icanhazdadjoke.com", config);

  const jokes = await response.json();

  jokeDisplay.innerHTML = jokes.joke;
}