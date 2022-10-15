import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Button2 } from "./Button";
import { Button3 } from "./Button";
import { Button4 } from "./Button";
import { Button5 } from "./Button";
import {Label} from'./Label'
import {Input} from './Input'
import {Label2} from'./Label'
import {Input2} from './Input'
import {Label3} from'./Label'
import {Input3} from './Input'
import {Option} from './Input'

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  
  <form>
    <Label/>
    <p></p>
    <Input />
    <p></p>
    <Label2/>
    <p></p>
    <Input2/>
    <p></p>
    <Label3 />
    <p></p>
    <Input3/>
    <p></p>
    <Option/>
    
    <TaskCard/>
    <p></p>
    <Button5 />
    <p></p>
    <Button4/>
    <p></p>
    <Button3/>
    <p></p>
     <Button2/>
     <p></p>
    <Button text='Habilitar cupo'/>
    <p></p>
    <Button  text='Habilitar notas'/>
    <p></p>
    <Button text='crear anuncio'/>
    <p></p>
    <Button text='Crear grupos'/>
    <p></p>
    <Button text='Exportar notas'/>
    </form>
    
  </>
);
