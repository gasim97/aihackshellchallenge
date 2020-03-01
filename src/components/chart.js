import React from 'react'
import { Chart } from 'react-charts'
import * as anomaly_1 from "../data/anomaly.json";

function get_predicted_anomalies() {
    var predicted_anomolies = [];
    const data = anomaly_1.values;
    const sample_size = data.length;
    for (var i = 0; i < sample_size; i++) {
        predicted_anomolies.push(
            {x: data[i].index,
            y: data[i].predicted_anomaly}
        )
    }
    predicted_anomolies.push({x: 118685, y:0});
    return predicted_anomolies;
}

function get_anomalies() {
    var anomalies = [];
    const data = anomaly_1.values;
    const sample_size = data.length;
    for (var i = 0; i < sample_size; i++) {
        anomalies.push(
            {x: data[i].index,
            y: data[i].anomaly}
        )
    }
    anomalies.push({x: 118685, y:0});
    return anomalies;
}
 
function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: get_predicted_anomalies()
        },
        {
            label: 'Series 2',
            data: get_anomalies()
        }
      ],
      []
    )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'linear', position: 'bottom' },
        { type: 'linear', position: 'left' }
      ],
      []
    )
   
    return (
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >
        <Chart data={data} axes={axes} style={{width: "80%"}}/>
      </div>
    )
  }

export default MyChart;