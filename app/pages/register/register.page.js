import { navigateTo } from "../../Router";
import { encryptData } from "../../helpers/crypto";

export function RegisterPage(){
    const root = document.getElementById("root");
    root.innerHTML = `
    <form>
        <input type="text" placeholder="Jhon Doe">
        <input type="email" autocomplete="username" placeholder="JhonDoe@gmail.com">
        <input type="password" autocomplete="off" placeholder="********">
        <button type="submit">Crear Usuario</button>
    </form>`;

    //logic
    const $createUserForm = document.getElementsByTagName("form")[0];
    $createUserForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        
        const $userName = document.querySelector('[type="text"]');
        const $userEmail = document.getElementsByTagName('input')[1];
        const $userPassword = document.querySelector('[type="password"]');

        if(!$userName.value || !$userEmail.value || !$userPassword.value){
            alert("Todos los campos son requeridos")
        }

        //fetch
        const userCreated = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                name: $userName.value,
                email: $userEmail.value,
                password: encryptData($userPassword.value)
            })
        })
        
        if (!userCreated.ok){
            alert("Error al cargar el usuario")
            return;
        }
        alert("Usuario Creado Satisfactoriamente")
        navigateTo('/login')
    })
}