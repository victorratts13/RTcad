import React, {Component} from 'react';
import FormCFDA from '../ui/FormCFDA';

export default class CFDA extends Component {
state = {
    getCFDA: []
}

componentDidMount(){
    this.getData();
    this.interval = setInterval(() => this.getData(), 100)
}
getData =_=>{
    fetch('http://localhost:3300/apiCFDA')
        .then(Response => Response.json())
        .then(Response => this.setState({getCFDA: Response.data}))
        .catch(err => console.error(err))
}



//renderData = ({id, nome, sobrenome, depart, Data})
    render(){
        return(
        <div className="container" style={{paddingTop: '5%'}}>
        <h2>Cadastro de funcionários e departamento atuante</h2>
        Informe Nome, Sobrenome e Departamento
        
        <FormCFDA />
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Depart.</th>
                <th scope="col">data</th>
              </tr>
            </thead>
            
        {this.state.getCFDA.map((getCFDA) => {
           return( 
            <tbody>
              <tr key={getCFDA.id}>
                <th scope="row">{getCFDA.id}</th>
                <td>{getCFDA.nome}</td>
                <td>{getCFDA.sobrenome}</td>
                <td>{getCFDA.depart}</td>
                <td>{getCFDA.Data}</td>
              </tr>
            </tbody>
          

        )})}
            </table>
        </div>
        
        );
    }
}
