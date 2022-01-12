import React from "react";

function VideoItem({ list, onSelected }) {
    const medium = list.snippet.thumbnails.medium;
    const info = list.snippet;

    return (
        <li onClick={() => onSelected(list)}>
            <div>
                {" "}
                <img src={medium.url} width={medium.width} height={medium.height} alt="" />
            </div>
            <div>
                <div>{info.title}</div>
                <div>{info.channelTitle}</div>
            </div>
        </li>
    );
}

export default VideoItem;
