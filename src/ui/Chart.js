import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
var url = "http://localhost:3300/apiGDM";


export default class Chart extends Component {
    state = {
        getCDG: []
    }
    
    componentDidMount(){
        this.getData();
    }
    getData =_=>{
        fetch('http://localhost:3300/apiGDM')
            .then(Response => Response.json())
            .then(Response => this.setState({getCDG: Response.data}))
            .catch(err => console.error(err))
    }
    
    test = {
        
            chartData:{
                labels: ['getCDG', 'data02', 'data03', 'data04'],
                datasets: [{
                    label: 'Population',
                    data: [
                        424,
                        442,
                        231,
                        123
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor:[
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: '1'

                }]
            }
        }

    
        render(){
            var id;
            return(
                
                <div className="chart">
                {this.state.getCDG.map((getCDG) => { return( 
                <div className="card">
                <div className="card">Gráfico</div>
                    <Bar
                        
                    data={{
                        labels: [`Lucro`, 'DPF', 'Prej.', 'IDG'],
                        datasets: [{
                            label: `${getCDG.depart}`,
                            data: [
                                `${getCDG.valor}`,
                                `${getCDG.valor / getCDG.id}`,
                                `${getCDG.valor * 1/2}`,
                                `${getCDG.valor * 10/100}`
                            ],
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor:[
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: '1'
        
                        }]
                    }}
                    width={100}
                    height={100}
                    options={{
                        maintainAspectRatio:true
                    }}
                    
                    />
                    
                    <div>
                    
              
    
            
                    </div>
                </div>
                )})}
                </div>
            )
        }
}
