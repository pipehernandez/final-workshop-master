import { navigateTo } from "../Router";

export function PrivateLayout($content, logic){
    const $nav = `<nav>
        <ul>
            <li><a href="/tasks">Tasks</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/logout">LogOut</a></li>
        </ul>
    </nav>`

    document.getElementById("root").innerHTML = `
    ${$nav}
    ${$content}
    `;

    logic()

    const $logOutAnchor = document.querySelector('[href="/logout"]')
    $logOutAnchor.addEventListener('click', e => {
        e.preventDefault()
        localStorage.removeItem('token')
        navigateTo('/login')
    })
}