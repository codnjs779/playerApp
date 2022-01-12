import React from "react";

function Detail({ select }) {
    const data = select.snippet.channelTitle;
    return (
        <section>
            <iframe type="text/html" width="100%" height="500px" src={`https://www.youtube.com/embed/${select.id}`} frameborder="0" allowFullScreen></iframe>
        </section>
    );
}

export default Detail;
