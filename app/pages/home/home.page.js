import {navigateTo} from '../../Router'

export function HomePage(){

    const root = document.getElementById("root");
    const $myButtonLogIn = document.createElement("BUTTON");
    $myButtonLogIn.textContent = "Log In!!!"
    root.appendChild($myButtonLogIn)
    $myButtonLogIn.addEventListener('click', (e) => {
        return navigateTo('/login')
    })
    const $myButtonRegister = document.createElement("BUTTON");
    $myButtonRegister.textContent = "Register!!!";
    root.appendChild($myButtonRegister);
    $myButtonRegister.addEventListener("click", (e) => {
        return navigateTo("/register");
    });
}