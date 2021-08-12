import React from 'react'
import {Pie,defaults} from 'react-chartjs-2';
//defaults.global.legend.position ='bottom';
function Piechart() {
   
   const id=JSON.parse(localStorage.getItem('dataid'))
   const data=JSON.parse(localStorage.getItem('data'))
    return (
        <div>
           <Pie
            data={{labels:id,
           datasets:[
               {
                   label:'£ of votes',
                   data:data,
                   backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ], borderWidth:1,

               },

           ]
        }}
        height={400}
        width={600}
        options={{
            maintainAspectRatio:false,
            scales:{
                yAxes:[
                    {
                        ticks:{
                          beignAtZero:true,  
                        },
                    }
                ]
            },
            legend:{
                labels:{
                  fontSize:22,
                }
        }
        }}


       /> 
        </div>
    )
}

export default Piechart
