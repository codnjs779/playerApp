import React from "react";
import styles from "./Detail.module.css";

function Detail({ select }) {
    const data = select.snippet;
    console.log("data", data);
    return (
        <section className={styles.detailBox}>
            <iframe frameBorder="0" title="youtubePlayer" type="text/html" width="100%" height="500px" src={`https://www.youtube.com/embed/${select.id}`} allowFullScreen></iframe>
            <div className={styles.videoInfo}>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.channelTitle}>{data.channelTitle}</div>
                <p className={styles.description}>{data.description}</p>
            </div>
        </section>
    );
}

export default Detail;
