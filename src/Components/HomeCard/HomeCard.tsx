import MenuPopupState from "../Menu/Menu";
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom';

interface CardProps {
    title?: string;
    icon?: string;
    description?: string;
    footer?: string;
    image?: string;
    type: string;
}


export default function HomeCard(content: CardProps) {
    const navigate = useNavigate();
    const items = ["Edit", "Delete"];
    function handleClick() {
        navigate("/new-product");
    }
    return (
        content.type == "content" ? <div onClick={() => navigate(`/product-details/${content.title}`)} className={styles.container}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeader}>
                    <img src={"ico/dashboard/trash.png"} alt={"Delete this device"} className={`${styles.delete} ${styles.img}`} />
                    <img src={content.icon} alt={content.title} />
                    <span>{content.title}</span>
                </div>
                <div className={styles.menu}>
                    <img className={styles.img} src={"ico/dashboard/startup.png"} alt={"Start the detection"} />
                    {/* <MenuPopupState key={"card"} items={items} element={
                        <img className={styles.dots} src="ico/dashboard/dots.svg" alt="dots" />
                    } /> */}
                </div>
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
        </div>
            :
            <div onClick={handleClick} className={styles.container}>
                <img height={"100px"} className={styles.plus} src="ico/dashboard/plus.svg" alt="plus" />
            </div>
    )
}