import React, {Component} from 'react';
import Chart from '../ui/Chart'

export default class CH extends Component {
    
        render(){
            return(
                <div className="nav container-fluid text-center">
                    <div className="card">
                        <h2>Detalhamento Gráfico<br /> e movimentação</h2>
                        <h5>Verifique o Lucro, dPF (despesa por funcionario), IDG (indice de desenvolvimento geral) e prejuizo de cada departamento</h5>
                    </div>
                    <div style={{
                        width: '350px',
                        height: '500px',
                        backgroundColor: 'rgba(50,255,50,0.01)'}}>
                    <Chart />
                    </div>    
                </div>
            )
        }
}
