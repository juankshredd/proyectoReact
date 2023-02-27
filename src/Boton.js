import PropTypes from 'prop-types';
export function BotonComprar(){
    return <button>
    </button>
}

export function Boton({text}){
    console.log(text)
    if(!text){
        console.error('El texto es requerido')
    }
    return <button>
        {text}
    </button>
}

Boton.propTypes = {
    text: PropTypes.string
}