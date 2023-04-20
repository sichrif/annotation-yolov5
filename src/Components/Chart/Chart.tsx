import React from 'react';
import { BarChart } from 'reaviz';

interface Props {
    data: Array<any>;
}

const Chart: React.FC<Props> = ({ data }) => {
    return (
        <BarChart width={500} height={200} data={data} />
    );
};

export default Chart;
