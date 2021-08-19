import React ,{useEffect,useRef}from 'react'
import Chart from 'chart.js'
import {Bar} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
export default function Test() {
    const state = {
        labels: [''],
        datasets: [
          {
            label: '',
            backgroundColor: ['rgba(75,192,192,1)'],
            borderWidth: 0,
            data: [2.01 ],
            barPercentage: 1.1,
          }
        ]
      }
    return (
        <div>
            <div style={{width:800}}>
            <Bar
                height={200}
                data={state}
                plugins={[ChartDataLabels]}
                options={{
                    indexAxis: 'y',
                    plugins: {
                        datalabels: {
                        formatter: function(value) {
                            if(value!==0){
                                return value;

                            }else{
                                return ''
                            }
                        },
                        align:'end',
                        offset: 50,
                        padding: 0
                        },
                        tooltip: {enabled: false},
                        hover: {mode: null},
                        legend: {
                            display: false,
                        },
                    },
                    responsive: true,
                        maintainAspectRatio: false,
                        legend: { display:false },
                    tooltips: {
                        enabled: false
                    },
                    responsive: true,
                    legend: {
                        display: false,
                        
                    },
                    scales: {
                        y: {
                            stacked: true,
                            barPercentage: 0.75,
                            grid: {
                                display: false,
                                drawTicks: false,
                                drawOnChartArea: false
                            },
                            ticks: {
                                fontColor: '#555759',
                                fontFamily: 'Lato',
                                fontSize: 11
                            }
                            
                        },
                        x: {
                            stacked: true,
                            grid: {
                                display: true,
                                drawTicks: false,
                                color: '#464646'
                            },
                            suggestedMin: -20,
                            suggestedMax: 20,
                            maxRotation: 0,
                        ticks: {
                            padding: 5,
                            beginAtZero: true,
                            fontColor: '#555759',
                            fontFamily: 'Lato',
                            fontSize: 11,
                            
                            callback: function(label, index, labels) {
                            
                            if(label==10){
                                return 'Digital Stategy Differentiated'
                            }else if(label==-10){
                                return 'Brick and Mortar Strategy'
                            }else if(label==0){
                                return 0
                            }else{
                                return null
                            }
                
                            }
                            
                        },
                        
                        }
                    }
                 }}
                />
            </div>
            
        </div>
    )
}
