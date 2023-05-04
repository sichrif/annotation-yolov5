import MenuPopupState from "../Menu/Menu"
import styles from "./style.module.css"

export default function Header() {
    const items = ["Profile", "Logout"];
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                ProductB
            </div>
            <div className={styles.itemsContainer}>
                <div className={styles.item}><img src="/ico/dashboard/analytics.svg" alt="analytics" />
                    <span>Dashboard</span>
                </div>
                {/* <div className={styles.item}><img src="/ico/dashboard/table.svg" alt="table" />
                    <span>Tables</span>
                </div>
                <div className={styles.item}><img src="/ico/dashboard/alerts.svg" alt="Alerts" />
                    <span>Alerts</span>
                </div>
                <div className={styles.item}><img src="/ico/dashboard/news.svg" alt="news" />
                    <span>News</span>
                </div> */}
            </div>
            <div className={styles.profile}>
                <div className={styles.profileOptions}>
                    <div className={styles.profileOption}>
                        <img src="/ico/dashboard/search.svg" alt="search" />
                    </div>
                    {/* <div className={styles.profileOption}>
                        <img src="/ico/dashboard/chat.svg" alt="chat" />
                    </div>
                    <div className={styles.profileOption}>
                        <img src="/ico/dashboard/notif.svg" alt="notif" />
                    </div> */}
                </div>
                <div className={styles.profileRow}>
                    <div className={styles.profileText}>
                        <div className={styles.profileName}>Cherif</div>
                        <div className={styles.profileBadge}>Engineer</div>
                    </div>
                    <MenuPopupState key={"header"} items={items} element={
                        <div style={{ display: "flex", cursor: "pointer" }}>
                            <img className={styles.useImage} src="/ico/dashboard/user.png" alt="profile" />
                            <img className={styles.arrowImage} src="/ico/dashboard/down-arrow.svg" alt="arrow" />
                        </div>
                    } />

                    <div className={styles.profileMenu}>
                        <div className={styles.profileMenuItem}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}