import './button.css'
import './button2.css'
import {Input} from './Input'
import {Captura} from './Input'

export function Button({text}){
    console.log(text)
    return <button  className='cc'>
       {text}
    </button>
}

export function Button2 (){
    return<button  style={{position: 'fixed', bottom: 530, right: '50%'}}  className='aa' >
    Estudiantes
    </button>
}
export function Button3 (){
    return<button style={{position: 'fixed', bottom: 530, right: '42%'}}  className='aa' >
     Profesores
    </button>
}
export function Button4 (){
    return<button  
    className='cc' >
     Crear usuario
    </button>
}
export function Button5 (){
    
    return<button  style={{position: 'fixed', bottom: 30, right: '45%'}} onclick="Captura()"           className='aa'  >
        
     Cargar
    </button>
}

