import React, { Component } from "react";

class Historial extends Component{
    render(){
        return(
            <div className='opcionesAnteriores'>
                <h3>Selección anterior: {this.props.opcionAnterior}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.historial}</ul>

            </div>
        )
    }
}
export default Historial;