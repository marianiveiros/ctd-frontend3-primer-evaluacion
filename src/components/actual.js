import data from "./data.json"
import React, { Component } from "react"
import Opciones from "./opciones"
import Historial from "./historial"

const historial = []

class Actual extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opcionAnterior: "",
            contador: 0,
        }
    }

    componentDidUpdate() {
        historial.push(this.state.opcionAnterior)
    }

    handleClick = (evento) => {
        const id = evento.target.value
        if(this.state.contador >= 7) {
            alert("Has llegado al final de esta aventura!! 🤩")
        } else if(id === "A" && this.state.opcionAnterior === "A") {
            this.setState({
                opcionAnterior: id,
                contador: this.state.contador + 2
            })
        } else if(id === "A" && this.state.opcionAnterior !== "A") {
            this.setState({
                opcionAnterior: id,
                contador: this.state.contador + 1
            })
        } else if(id === "B"&& this.state.opcionAnterior!=="A") {
            this.setState({
                opcionAnterior: id,
                contador: this.state.contador + 2
            })
        } else if(id === "B" && this.state.opcionAnterior === "A") {
            this.setState({
                opcionAnterior: id,
                contador: this.state.contador + 3
            })
    
        } 
      }

    render(){
        return(
            <div className='layout'>
            
                
            
               <h1 className='historia'>{data[this.state.contador].historia}</h1>
               
               <Opciones
                    handleClick={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Historial
                    opcionAnterior={this.state.opcionAnterior}
                    historial={historial.map((opcion,index) =>(
                        <li key={index}>{opcion}</li>
                    ))}
                />

            </div>
        )
    }
}
export default Actual;