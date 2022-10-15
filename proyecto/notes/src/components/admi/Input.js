import React from "react";
import'./input.css'



export function Input(){



    return <div style={{position: 'fixed', top: '38%', right: 620}} >

        <input
        id="nombre"
        name="nombre"
        placeholder='Escribe nombre completo'
        type='text'
        size="35"
        />
      
    </div>
}
export function Captura(){
    var nombreest=document.getElementById("nombre").value;
    var correo=document.getElementById("correo").value;
    var contraseña=document.getElementById("contra").value;
    var grado=document.getElementById("grado").value;


    
 
 }

export function Input2(){



    return <div style={{position: 'fixed', top: '45%', right: 620}} >

        <input
        id='correo'
        name='correo'
        placeholder='Ingresa correo electronico'
        type='text'
        onChange=''
        className=''
        size="35"
        />
      
    </div>
}

export function Input3(){



    return <div style={{position: 'fixed', top: '59%', right: 620}} >

        <input    
        id='contra'
        name='contra'
        placeholder='Ingresa contraseña'
        type=''
        onChange=''
        className=''
        size="35"
        />
      
    </div>
}
export function Option(){



    return <div style={{position: 'fixed', top: '51%', right: 700}} >

      <select id='grado'
        name='grado'>
            <option value="">GRADO 1</option>
            <option value="1">GRADO 2</option>
            <option value="2">GRADO 3</option>
            <option value="3">GRADO 4</option>
            <option value="4">GRADO 5</option>
            <option value="5">GRADO 6</option>
            <option value="6">GRADO 7</option>
            <option value="7">GRADO 8</option>
            <option value="8">GRADO 9</option>
            <option value="9">GRADO 10</option>
            <option value="10">GRADO 11</option>
               
      </select><br></br>
      
    </div>
}