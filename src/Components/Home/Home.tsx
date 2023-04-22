import Header from "../Header/Header"
import HomeCard from "../HomeCard/HomeCard";
import styles from "./style.module.css"

export default function Home() {
    const cardContent = [
        {
            title: "SpaceX Engine - GSE4 - 1",
            icon: "/ico/dashboard/artificial-intelligence.png",
            description: "He agrees that the IO-360-L2A is the closest to the definition of most reliable. There is one bright spot. Lycoming's roller tappets-available on many Lycoming engines for new aircraft and for replacement engines in legacy airplanes-appear to be doing wel",
            footer: "Total Estimation",
            image: "/ico/dashboard/device.svg"
        },
        {
            title: "FedEx Cargo - GSE4 - 1",
            icon: "/ico/dashboard/artificial-intelligence.png",
            description: "1000,000",
            footer: "Total Estimation",
            image: "/ico/dashboard/device.svg"
        }
    ];
    return (
        <div>
            <Header />
            <div className={styles.container}>
                {cardContent.map((content, index) => {
                    return <HomeCard key={index} type="content" {...content} />
                })
                }
                <HomeCard type="new" />
            </div>
        </div>
    )
}