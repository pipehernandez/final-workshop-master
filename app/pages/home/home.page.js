export function HomePage(){
    const root = document.getElementById("root");
    const $mydiv = document.createElement("DIV");
    $mydiv.textContent = "Hola desde home page!!!"
    root.appendChild($mydiv)
}