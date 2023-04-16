import Draggable from "react-draggable";
import DataChart from "../Chart/Chart";
import ChartContainer from "../ChartContainer/ChartContainer";
import Header from "../Header/Header"
import Card from "../card/card"
import styles from "./style.module.css"
import React from "react";
import Chart from "../Chart/Chart";

export default function Home() {
    const yoloData = [0.8, 0.9, 0.75, 0.85, 0.95];

    const cardContent = [
        {
            title: "+32.40%",
            image: "/ico/dashboard/artificial-intelligence.png",
            description: "1000,000",
            footer: "Total Estimation"
        },
        {
            title: "+3%",
            image: "/ico/dashboard/health.png",
            description: "1000,000",
            footer: "Total Estimation"
        },
        {
            title: "+32.40%",
            image: "/ico/dashboard/machine-learning.png",
            description: "1000,000",
            footer: "Total Estimation"
        },
        {
            title: "40%",
            image: "/ico/dashboard/nlp.png",
            description: "4000",
            footer: "Total Estimation"
        },
    ]
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div >
                    <div className={styles.top}>
                        <div className={styles.headerText}>Jet Engine - SW 254
                            <img src="/ico/dashboard/down-arrow.svg" alt="Down arrow" />
                        </div>
                        <div className={styles.topRight}>
                            <div className={styles.topRightItem}>
                                <img src="/ico/dashboard/share.svg" alt="share" />
                                Share

                            </div>
                            <div className={styles.topRightItem}>
                                <img src="/ico/dashboard/download.svg" alt="download" />
                                Download
                            </div>
                        </div>


                    </div>
                    <div className={styles.topCards}>

                        {cardContent.map((content, index) => {
                            return <Card key={index} {...content} />
                        })
                        }
                    </div>
                </div>
                <div className={styles.charts}>
                    <ChartContainer title="Lines chart" date="May to June 2021" Chart={() => <Chart data={yoloData} />} />
                </div>
            </div>
        </div>
    )
}