import React from "react";
import VideoItem from "./VideoItem";
import styles from "./VideoList.module.css";

function VideoList({ videoList, onSelected }) {
    return (
        <ul className={styles.videoList}>
            {videoList &&
                videoList.map((list) => {
                    return <VideoItem list={list} key={list.id} onSelected={onSelected} />;
                })}
        </ul>
    );
}

export default VideoList;
