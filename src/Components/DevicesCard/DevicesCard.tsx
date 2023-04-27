import styles from "./style.module.css"

export default function DevicesCard(deviceData: any) {
    const content = deviceData.content;
    return (
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <img src={content.icon} alt={content.name} />
                <span>{content.name}</span>
            </div>
            {content.data.map((data: any, i: number) => {
                return <div key={i} className={styles.cardBody}>
                    <div style={{ color: " #9290FE" }}>  {data.key}</div>
                    <div style={{ color: "#B1C7DF" }}>  {data.value}</div>
                </div>

            })}
        </div>
    )
}