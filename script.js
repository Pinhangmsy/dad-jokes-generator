const btnEl = document.getElementById("btn");
const jokEl = document.getElementById("joke");

const apiKey = "8zOOBXzintUh308RT7wXPg==GcpVaSHm6NFYKeGW";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=";


async function getJoke(){

    try {
        jokEl.innerText = "Updating..";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokEl.innerText = data[0].joke;
    }
    catch (error) {
        jokEl.innerText = "An error happend, try again later";
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    }
}


btnEl.addEventListener("click",getJoke);