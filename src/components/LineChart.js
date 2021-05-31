import React from 'react'
import '../App.css'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div className='bar'>
    <div> <p style={{fontFamily:'Arial, Helvetic a, sans-serif' ,fontWeight:'bold', margin:'auto'}}>Balance</p>
    </div>
    <div>
      <Line
        data={{
          labels: ['1', '2', '3', '4', '5'],
          datasets: [
            {
              label: 'Income',
              data: [2450, 2500, 2760, 2980, 2530],
              backgroundColor: "#2C70F5",
            borderColor: "rgb(238,237,251)",
            },
          ],
        }}
        height={410}
        width={500}
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
                },
              },
              y: {
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },  
            }
            ,
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

export default LineChart
