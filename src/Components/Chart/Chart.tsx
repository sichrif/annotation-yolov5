import React from 'react';
import Plot from 'react-plotly.js';

interface Props {
    data: number[];
}

const Chart: React.FC<Props> = ({ data }) => {
    const chartData = {
        x: data.map((_, i) => i),
        y: data,
        type: 'scatter',
        mode: 'lines',
        line: { color: '#1f77b4' },
        marker: {
            color: 'red',
            size: 8
        },
    };

    const layout = {
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent',
        font: { color: '#fff' },
        xaxis: { title: 'Frame' },
        yaxis: { title: 'Confidence' }
    };

    return (
        <Plot
            data={[chartData]}
            layout={layout}
        />
    );
};

export default Chart;
