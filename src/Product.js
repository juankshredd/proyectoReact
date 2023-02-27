function Product({title, name="No disponible ahora"}){
    return<>
        <h1>{title}{name}</h1>
    </>
}

export function ProteinaCard(props){
    console.log(props)
    return <>
        <h1>{props.nombre}</h1>
        <p>Esta proteina es muy buena porque es limpia y microfiltrada</p>
        <h4>Lista de nutrientes por cada racion: </h4>
        <ul>
            <li>Proteina: {props.nutrition_facts.proteina}</li>
            <li>Carbohidratos: {props.nutrition_facts.carbohidrato}</li>
            <li>Grasa: {props.nutrition_facts.grasa}</li>
        </ul>
        <h5>Precio: ${props.precio} COP</h5>
        <button>Comprar</button>
    </>
}

export function CreatinaCard(props){
    return <>
    <h1>{props.nombre}</h1>
    <p>Esta creatina es usada por los pros</p>
        <h4>Lista de nutrientes por cada racion: </h4>
        <ul>
            <li>Creatina: {props.creatina_facts.creatina}</li>
            <li>Carbohidratos: {props.creatina_facts.carbohidrato}</li>
            <li>Grasa: {props.creatina_facts.grasa}</li>
        </ul>
        <h5>Precio: ${props.precio} COP</h5>
        <button>Comprar</button>
    </>
}

export default Product