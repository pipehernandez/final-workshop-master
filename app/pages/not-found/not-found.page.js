import { navigateTo } from "../../Router"

export function NotFoundPage(){
    const root = document.getElementById("root");
    root.innerHTML = `
        <h1>404</h1>
        <p>Page not found</p>
        <button id="button">Go to Home Page</button>
    `
    const $myButton = document.getElementById("button");
    $myButton.addEventListener('click', e => {
        e.preventDefault;
        root.innerHTML = ``
        navigateTo ('/')
        return;
    })
}
