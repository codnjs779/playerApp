import React, { memo } from "react";
import styles from "./VideoItem.module.css";

const VideoItem = memo(({ list, onSelected }) => {
    const medium = list.snippet.thumbnails.medium;
    const info = list.snippet;

    return (
        <li className={styles.videoItem} onClick={() => onSelected(list)}>
            <div className={styles.thumbImg}>
                {" "}
                <img src={medium.url} width={medium.width} height={medium.height} alt="" />
            </div>
            <div className={styles.channelInfo}>
                <div className={styles.title}>{info.title}</div>
                <div className={styles.channelTitle}>{info.channelTitle}</div>
            </div>
        </li>
    );
});

export default VideoItem;
