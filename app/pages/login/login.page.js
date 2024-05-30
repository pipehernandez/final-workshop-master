import { decryptData } from "../../helpers/crypto";
import { navigateTo } from "../../Router";

export function LoginPage() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <form>
        <input type="email" autocomplete="username"/>
        <input type="password" autocomplete="current-password"/>
        <button type="submit">Iniciar Sesion</button>
    </form>`;

  // logic

  const $loginForm = document.getElementsByTagName("form")[0];
  $loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const $userEmail = document.getElementsByTagName("input")[0];
    const $userPassword = document.querySelector('[type="password"]');

    if (!$userEmail.value || !$userPassword.value) {
      alert("Todos los campos son requeridos!");
    }

    // fetch
    const usersFetched = await fetch("http://localhost:3000/users");

    if (!usersFetched.ok) {
      alert("Error al Iniciar Sesion");
      return;
    }

    const usersToJson = await usersFetched.json();
    const userFound = usersToJson.find(
      (user) => user.email === $userEmail.value
    );

    if (!userFound) {
      alert("Usuario no encontrado");
      return;
    }

    if (decryptData(userFound.password) !== $userPassword.value) {
      console.log("Contraseña incorrecta");
      return;
    }

    const token = Math.random().toString(36).substring(2);
    localStorage.setItem("token", token);
    navigateTo("/tasks");
  });
}
