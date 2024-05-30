import { navigateTo } from "../../Router";

export function TaskPage(){
    const root = document.getElementById('root');
    root.innerHTML = `
    <h1>Tasks</h1>
    <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
    </ul>
    <button id="logout">Cerrar Sesion</button>
    `;

    const $logoutButton = document.getElementById('logout')
    $logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token')
        navigateTo('/login')
    });
}