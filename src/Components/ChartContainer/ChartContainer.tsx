import React from "react";
import styles from "./ChartContainer.module.css";
import { ResizableBox } from 'react-resizable';

interface ChartContainerProps {
    title: string;
    date: string;
    Chart: any;
}

export default function ChartContainer(content: ChartContainerProps) {
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
            <div className={styles.chartBody}>
                <content.Chart />
            </div>
        </div>
    )
}