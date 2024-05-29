import { Router } from "./Router";

export function App(){
    const root = document.getElementById("root")
    if(!root){
        throw new Error("Hay un error, no hay root")
    }
    Router();
}