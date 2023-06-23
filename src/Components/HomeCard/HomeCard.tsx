import { Tooltip } from "@mui/material";
import MenuPopupState from "../Menu/Menu";
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom';
import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
    const TrainStart = (title: string) => {
        fetch(`${url}/train?model_name=${title}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
            }
            );
    }
    const Detect = (title: string) => {
        fetch(`${url}/detect?model_name=${title}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("data", data);
            }
            );
    }

    return (
        content.type == "content" ? <div className={styles.container}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeader}>
                    <Tooltip title="Delete" arrow>
                        <img onClick={() => deleteModel(content.title)} src={"ico/dashboard/trash.png"} alt={"Delete this device"} className={`${styles.delete} ${styles.img}`} />
                    </Tooltip>
                    <img src={"/ico/dashboard/artificial-intelligence.png"} alt={content.title} />
                    <span>{content.title}</span>
                </div>
                <div className={styles.menu}>

                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleMenuClick}
                        >

                            <svg width={"25px"} height={"25px"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
                                <path fill="gray" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" />
                            </svg>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={() => {
                                Detect(content.title);
                                handleClose()
                            }}>
                                <Tooltip title="Start detection process" arrow placement="right">
                                    <div style={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center"
                                    }}>
                                        <img style={{ cursor: "pointer", width: "25px" }} className={styles.img} src={"ico/dashboard/startup.png"} alt={"Start the detection"} />
                                        <span style={{ color: "black" }}>Detect</span>
                                    </div>
                                </Tooltip>
                            </MenuItem>
                            <MenuItem onClick={() => { TrainStart(content.title); handleClose() }}>
                                <Tooltip title="Start training" arrow placement="right">
                                    <div style={{
                                        display: "flex",
                                        gap: "10px",
                                        alignItems: "center"
                                    }}>
                                        <img style={{ cursor: "pointer", width: "25px" }} src={"/ico/dashboard/train.png"} alt={content.title} />
                                        <span style={{ color: "black" }}>Train</span>
                                    </div>
                                </Tooltip>
                            </MenuItem>

                        </Menu>
                    </div>

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