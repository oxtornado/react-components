import React, {Component} from "react";

class Student extends Component {
    render() {
        const {name, email, phone} = this.props;
        return(
            <div>
                <h1>Datos del Aprendiz</h1>
                
                <p>Nombre : {name}</p>
                <p>Email : {email}</p>
                <p>Ficha : {phone}</p>
            </div>
        )
    }
}

export default Student;