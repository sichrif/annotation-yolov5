import { useEffect, useState } from "react";
import Header from "../Header/Header"
import HomeCard from "../HomeCard/HomeCard";
import styles from "./style.module.css"

export default function Home() {
    let url = "http://127.0.0.1:5000";
    const [models, setModels] = useState([]);
    useEffect(() => {
        fetchModels();
    }, [])

    const fetchModels = () => {
        fetch(`${url}/models`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setModels(data.models);
            }
            );
    }
    useEffect(() => {
        console.log(models);
    }, [models])
    const deleteModel = (modelId) => {
        // Filter out the model with the specified model_id
        const updatedModels = models.filter((model) => model.model_id !== modelId);

        // Update the state with the updated models array
        setModels(updatedModels);
    };


    return (
        <div className="component" >
            <Header />
            <div className={styles.container}>
                {models.map((content, index) => {
                    return <HomeCard key={index} type="content" title={content.model_name} id={content.model_id} deleteModels={(id) => deleteModel(id)} />
                })
                }
                <HomeCard type="new" />
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}