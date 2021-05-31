import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
  return (
    <div style={{padding:"20px"}}>
    <div> <p style={{fontFamily:'Arial, Helvetic a, sans-serif' , color:'#8997A7'}}>New Users</p> 
    <span style={{fontSize:'30px',fontWeight:'bold', margin:'0px', display:"inline-flex", lineHeight:"22px"}}>
      94.2%
      <span style={{fontSize:'15px',width:'50px', background: '#18BB84', borderRadius: '20px', verticalAlign:"middle", textAlign:"center"}}>
        +6.9%
      </span>
    </span>
    </div>
    <div >
      <Bar
        data={{
          labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
          datasets: [
            {
              label: '',
              data: [2450, 2500, 2760, 2980, 2530, 2500, 2600, 1800],
              backgroundColor:'#2C70F5',
            },
          ],
        }}
        height={100}
        width={400}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                }
              },
              y: {
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                }
              },  
            },
            plugins:
            {
              legend: {
              display:false,
            }
          }
          }
        }
      />
    </div>
    </div>
  )
}

export default BarChart

