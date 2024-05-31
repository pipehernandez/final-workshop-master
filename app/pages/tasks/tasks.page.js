export function TaskPage(){
    const $content = `<form>
        <input type="text" placeholder="Titulo de tarea..." id="title"/>
        <input type="text" placeholder="Descripcion..." id="description"/>
        <select name="priority">
            <option value="" disabled selected>--Selecciona algo--</option>
            <option value="HIGH">Alta</option>
            <option value="MEDIUM">Media</option>
            <option value="LOW">Baja</option>
        </select>
        <input type="date" id="date"/>
        <input type="submit"/>
    </form>`;
    const logic = () => {
        const $form = document.getElementsByTagName('form')[0]
        $form.addEventListener('submit', e => {
            e.preventDefault();
            
        })
    }

    return {
        $content,
        logic
    }
}