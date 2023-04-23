import ChartContainer from "../ChartContainer/ChartContainer";
import Header from "../Header/Header"
import Card from "../card/card"
import styles from "./style.module.css"
import Chart from "../Chart/Chart";
import DevicesCard from "../DevicesCard/DevicesCard";
import Camera from "../Camera/Camera";
// import { AreaChart, Gridline, GridlineSeries } from "reaviz";

export default function DetectDetails() {
    const data = [
        { key: 'IDS', data: 14 },
        { key: 'Malware', data: 5 },
        { key: 'DLP', data: 18 }
    ];
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
    ];
    const Devices = [
        {
            type: 'Camera type',
            name: 'Nikon Z50',
            icon: '/ico/dashboard/camera.svg',
            data: [
                {
                    key: 'Res',
                    value: '4K 1920X1080',
                },
                {
                    key: 'Film',
                    value: '50mm',
                },
                {
                    key: 'MD',
                    value: 'Thermal',
                },

            ]
        },
        {
            type: 'Running time',
            name: 'Flight time',
            icon: '/ico/dashboard/time.svg',
            data: [
                {
                    key: 'Time',
                    value: '54 min',
                },
                {
                    key: 'Remaining',
                    value: '45 min ap.',
                },
                {
                    key: 'TMP',
                    value: '23º C',
                },

            ]
        }
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
                    <ChartContainer title="Lines chart" date="May to June 2021" Chart={() => <Chart data={data} />} />
                    <ChartContainer title="Lines chart" date="May to June 2021" Chart={() => <Chart data={data} />} />

                </div>
                <div className={styles.devices}>
                    <DevicesCard content={Devices[0]} />
                    <Camera />
                    <DevicesCard content={Devices[1]} />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}