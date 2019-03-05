import React, {Component} from 'react';
import FormCDD from '../ui/FormCDD';

export default class CDD extends Component {
    state = {
        getCDD: []
    }
    
    componentDidMount(){
        this.getData();
        this.interval = setInterval(() => this.getData(), 100)
    }
    getData =_=>{
        fetch('http://localhost:3300/apiCDD')
            .then(Response => Response.json())
            .then(Response => this.setState({getCDD: Response.data}))
            .catch(err => console.error(err))
    }
    
    
    //renderData = ({id, nome, sobrenome, depart, Data})
        render(){
            const {getCDD} = this.state;
            return(
            <div className="container" style={{paddingTop: '5%'}}>
            <h2>Cadastro e gerenciamento de departamento</h2>
            Insira um departamento e a área atuante deste departamento
            <FormCDD />
                <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Area</th>
                    <th scope="col">Data</th>
                  </tr>
                </thead>
                
            {this.state.getCDD.map((getCDD) => {
               return( 
                <tbody>
                  <tr key={getCDD.id}>
                    <th scope="row">{getCDD.id}</th>
                    <td>{getCDD.depart}</td>
                    <td>{getCDD.area}</td>
                    <td>{getCDD.data}</td>
                  </tr>
                </tbody>
              
    
            )})}
                </table>
            </div>
            
            );
        }
}