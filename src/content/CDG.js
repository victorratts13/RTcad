import React, {Component} from 'react';
import FormCGM from '../ui/FormCGM'

export default class CDG extends Component {
    state = {
        getCDG: []
    }
    
    componentDidMount(){
        this.getData();
        this.interval = setInterval(() => this.getData(), 100)
    }
    getData =_=>{
        fetch('http://localhost:3300/apiGDM')
            .then(Response => Response.json())
            .then(Response => this.setState({getCDG: Response.data}))
            .catch(err => console.error(err))
    }
    
    
    //renderData = ({id, nome, sobrenome, depart, Data})
        render(){
            const {getCDG} = this.state;
            return(
            <div className="container" style={{paddingTop: '5%'}}>
            <h2>Gerenciamento de Movimentações</h2>
            Cadastre e gerencia as movimentações dos Funcionarios nos seguintes departamentos
            <FormCGM />
                <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Descr.</th>
                    <th scope="col">Valor R$</th>
                  </tr>
                </thead>
                
            {this.state.getCDG.map((getCDG) => {
               return( 
                <tbody>
                  <tr key={getCDG.id}>
                    <th scope="row">{getCDG.id}</th>
                    <td>{getCDG.depart}</td>
                    <td>{getCDG.descr}</td>
                    <td>R$ {getCDG.valor}</td>
                  </tr>
                </tbody>
              
    
            )})}
                </table>
            </div>
            
            );
        }
}