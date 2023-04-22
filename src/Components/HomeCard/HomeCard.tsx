import styles from "./style.module.css"

interface CardProps {
    title?: string;
    icon?: string;
    description?: string;
    footer?: string;
    image?: string;
    type: string;
}


export default function HomeCard(content: CardProps) {
    return (
        content.type == "content" ? <div className={styles.container}>
            <div className={styles.cardHeader}>
                <img src={content.icon} alt={content.title} />
                <span>{content.title}</span>
            </div>
            <div className={styles.cardBody}>
                {content.description}
            </div>
            <div className={styles.cardImage}>
                <img src={content.image} alt={content.title} />
            </div>
            <div className={styles.cardFooter}>
                <span>{content.footer}</span>
            </div>
        </div> : <div className={styles.container}>
            <img height={"100px"} className={styles.plus} src="ico/dashboard/plus.svg" alt="plus" />
        </div>
    )
}