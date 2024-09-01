import React, {Component} from "react";
import Student from "./Students";

class Post extends Component {
    state = {
        name : 'ADSI',
        course  : '421341',
        skills : [
            'React',
            'PHP',
            'HTML'
        ],
        title : 'Tecnologo',
        time : '2 años'
    }

    handleChangeState=(e)=>{
        this.setState({
            name : 'Programacion',
            course : '645561',
            skills : [
                'Java',
                'JavaScript',
                'CSS'
            ]
        })
    }

    handleChange=(e)=>{
        this.state({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('name: ', this.state.name)
        console.log('title: ', this.state.title)
        console.log('time: ', this.state.time)
    }

//    handleClick=(e)=>{
//        console.log(this.state)
//    }
//
//    handleMouseOver=(e)=>{
//        console.log(e.target, e.pageX)
//    }
//    
//    handleCopy=(e)=>{
//        console.log('Parrafo se ha copiado :D')
//    }
//
//    handleChangeState=(e)=>{
//        this.setState({
//            name : 'Daniel',
//            age : 32,
//            skills : [
//                'php',
//                'javascript',
//                'css'
//            ] 
//        })
//    }

    render (){
        return(
            <div>
                <h1>Este es el Componente Post</h1>
                {new Date().toLocaleDateString()}

                <p>Programa : {this.state.name}</p>  
                <p>Titulo : {this.state.title}</p>
                <p>Duracion : {this.state.time}</p>
                <p>Ficha : {this.state.skills.join(', ')} </p>

                <button onClick={this.handleChangeState}>
                    Cambiar estado del Componente
                </button>
                <form onSubmit={this.handleSubmit}>
                    Programa : <input type="text" name="name" onChange={this.handleChange} value={this.state.name}/> <br/>
                    Titulo : <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/> <br/>
                    Duracion : <input type="text" name="title" onChange={this.handleChange} value={this.state.time}/> <br/>

                    <button type="submit"><strong>Enviar</strong></button>
                </form>
                <Student name="German Garmendia" email="germandogendia@gmail.com" phone="302348787"/>
                <Student name="Juliana Sanchez" email="julianaschez@gmail.com" phone="304620516"/>
            </div>
        )
    }
}

export default Post;