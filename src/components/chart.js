import React from 'react'
import { Chart } from 'react-charts'
import * as anomaly_1 from "../data/anomaly_1.json";

function get_trip_risk() {
    var trip_risk = [];
    const data = anomaly_1.values;
    const sample_size = data.length;
    for (var i = 0; i < sample_size; i++) {
        trip_risk.push(
            {x: i,
            y: data[i].trip_risk}
        )
    }
    return trip_risk;
}

function get_anomalies() {
    var anomalies = [];
    const data = anomaly_1.values;
    const sample_size = data.length;
    for (var i = 0; i < sample_size; i++) {
        anomalies.push(
            {x: i,
            y: data[i].anomaly}
        )
    }
    return anomalies;
}
 
function MyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Series 1',
          data: get_trip_risk()
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
        <Chart data={data} axes={axes} />
      </div>
    )
  }

export default MyChart;