import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Data } from '../../utils/chart-data';
import type { ChartType, ChartData, ChartOptions, DefaultDataPoint, Plugin, UpdateMode } from 'chart.js';

type Props = {
    data: {
        labels: number[]
        datasets: {
            label: string,
            data: number[],
            // you can set indiviual colors for each bar
            backgroundColor: string[],
            borderWidth: number,
          }[]
    },
    type: ChartType
}

const Charts = ( {data, type}: Props) => {
    
    return (
        <>
            <Chart height={'400px'} type={type} data={data} options={{
                responsive: true,
                maintainAspectRatio: false
            }}/>
        </>
    )
}

export default Charts