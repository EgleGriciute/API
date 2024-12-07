// Selecting DOM elements:
const p = document.querySelector("p");
const btn = document.querySelector("button");
const url = "https://api.chucknorris.io/jokes/random";

// Fetching and displaying API data:
const getJoke = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { value } = data;
      p.innerText = value;
    })
    .catch((error) => {
      p.innerText = "Error fetching joke";
      console.error("Error:", error);
    });
};

// Initializing function:
btn.addEventListener("click", getJoke);
