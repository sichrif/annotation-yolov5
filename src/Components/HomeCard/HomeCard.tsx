import MenuPopupState from "../Menu/Menu";
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom';

interface CardProps {
    title?: string;
    id?: string;
    // icon?: string;
    // description?: string;
    // footer?: string;
    // image?: string;
    deleteModels?: any;
    type: string;
}


export default function HomeCard(content: CardProps) {
    const navigate = useNavigate();
    const imagesArray = ["device.svg", "modern_card.png", "audio-transformed.png", "modern-drone.png", "MDC_PFE.png"];
    let url = "http://127.0.0.1:5000";
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * imagesArray.length);


    function handleClick() {
        navigate("/new-product");
    }
    const deleteModel = (id: string) => {
        console.log("id", id);
        fetch(`${url}/models/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
                content.deleteModels(id)
                // if (data.status == "success") {
                //     window.location.reload();
                // }
            }
            );
    }
    console.log("content", content);
    return (
        content.type == "content" ? <div className={styles.container}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeader}>
                    <img onClick={() => deleteModel(content.id)} src={"ico/dashboard/trash.png"} alt={"Delete this device"} className={`${styles.delete} ${styles.img}`} />
                    <img src={"/ico/dashboard/artificial-intelligence.png"} alt={content.title} />
                    <span>{content.title}</span>
                </div>
                <div className={styles.menu}>
                    <img className={styles.img} src={"ico/dashboard/startup.png"} alt={"Start the detection"} />
                    {/* <MenuPopupState key={"card"} items={items} element={
                        <img className={styles.dots} src="ico/dashboard/dots.svg" alt="dots" />
                    } /> */}
                </div>
            </div>

            {/* <div className={styles.cardBody}>
                {content.description}
            </div> */}
            <div onClick={() => navigate(`/product-details/${content.id}`)} className={styles.cardImage}>
                <img src={`/ico/dashboard/${imagesArray[randomIndex]}`} alt={content.title} />
            </div>
            {/* <div className={styles.cardFooter}>
                <span>{content.footer}</span>
            </div> */}
        </div>
            :
            <div onClick={handleClick} className={styles.container}>
                <img height={"100px"} className={styles.plus} src="ico/dashboard/plus.svg" alt="plus" />
            </div>
    )
}