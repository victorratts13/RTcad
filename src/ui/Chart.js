import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class Chart extends Component {
    constructor(){
        super();
        this.state = {
            chartData:{
                labels: ['data01', 'data02', 'data03', 'data04'],
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

    }
    
        render(){
            return(
                <div className="chart">
                    <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio:true
                    }}
                    />
                </div>
            )
        }
}