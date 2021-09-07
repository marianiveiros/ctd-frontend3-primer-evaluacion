import React, {Component} from 'react';
import data from './data.json';
import Historial from './historial';
import Opciones from './opciones';

const historial=[];

class Actual extends Component{
    constructor(props){
        super(props);
        this.state={
            
            opcionAnterior:'',
            contador: 0
        }
    }

    componentDidUpdate() {
        historial.push(this.state.opcionAnterior)
    }

    handleClick = (e) => {
        const opt = e.target.value;
        if(opt ==='A' && this.state.opcionAnterior === 'A'){
            this.setState({
                
                opcionAnterior: opt,
                contador: this.state.contador +2
            })
        }else if(opt==='A' && this.state.opcionAnterior !== 'A'){
            this.setState({
                opcionAnterior: opt,
                contador: this.state.contador +1
            })
        }else if (opt === 'B'){
            this.setState({
                opcionAnterior: opt,
                contador: this.state.contador +2
            })
        } else if (opt ==='B'&& this.state.opcionAnterior === 'A'){
            this.setState({
                opcionAnterior: opt,
                contador: this.state.contador +3
            })
        } else if(this.state.contador>8){
            alert('Has llegado al final de esta aventura!! 🤩')
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
