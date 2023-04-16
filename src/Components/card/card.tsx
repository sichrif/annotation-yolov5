import styles from "./style.module.css"

interface CardProps {
    title: string;
    image: string;
    description: string;
    footer: string;
}


export default function Card(content: CardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.cardHeader}>
                <img src={content.image} alt={content.title} />
                <span>{content.title}</span>
            </div>
            <div className={styles.cardBody}>
                {content.description}
            </div>
            <div className={styles.cardFooter}>
                <span>{content.footer}</span>
            </div>
        </div>
    )
}