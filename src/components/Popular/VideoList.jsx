import React from "react";
import VideoItem from "./VideoItem";

function VideoList({ videoList, selectedHandler }) {
    const onSelected = () => {
        selectedHandler("hellddo");
    };
    return (
        <ul>
            {videoList &&
                videoList.map((list) => {
                    return <VideoItem list={list} key={list.id} onSelected={onSelected} />;
                })}
        </ul>
    );
}

export default VideoList;
