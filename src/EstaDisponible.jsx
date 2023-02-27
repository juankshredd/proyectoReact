export function EstaDisponible(){
    const estaDisponible = true;

    /*if(isEngineer){
        return <h1>Es ingeniero</h1>
    } else {
        return <h1>Es tecnologo</h1>
    }*/

    return <p>{estaDisponible ? 'Producto disponible 🤑' : "Producto agotado 😝"}</p> // esto reemplaza if else
}