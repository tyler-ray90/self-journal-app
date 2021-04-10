export function quoteAPI() {
    return fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "e29cb6fff2msh8351bed7e0c08f6p1b8f74jsn5ec3759f28f4",
            "x-rapidapi-host": "quotes15.p.rapidapi.com"
        }
    })
    .then(res => res.json());
}

