import React from "react";
import styles from "./ChartContainer.module.css";
import { Resizable } from 'react-resizable';

interface ChartContainerProps {
    title: string;
    date: string;
    Chart: any;
}

export default function ChartContainer(content: ChartContainerProps) {
    const [size, setSize] = React.useState({ width: 500, height: 200 });
    const onResize = (event, { node, size, handle }) => {
        setSize({ width: size.width, height: size.height });
    };
    return (

        <div className={styles.container}>
            <div className={styles.chartHeader}>
                <div className={styles.headerLeft}>
                    <div><img src="/ico/dashboard/chart.svg" alt="chart icon" /></div>
                    <div>
                        <div className={styles.chartTitle}>{content.title}</div>
                        <div className={styles.chartDate}>{content.date}</div>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <img src="/ico/dashboard/share.svg" alt="share icon" />
                    <img src="/ico/dashboard/download.svg" alt="download icon" />
                    <img src="/ico/dashboard/settings.svg" alt="settings icon" />
                </div>
            </div>
            <Resizable width={size.width} height={size.height} onResize={onResize}>
                <div className={styles.chartBody}>
                    <content.Chart />
                </div>
            </Resizable>
        </div>
    )
}