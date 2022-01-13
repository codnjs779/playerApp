import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import axios from "axios";
import VideoList from "./components/Popular/VideoList";
import InputForm from "./components/Search/InputForm";
import Detail from "./components/Detail/Detail";
import Loadingspinner from "./components/Loading/Loadingspinner";

function App() {
    const [video, setVideo] = useState();
    const [select, setSelect] = useState();
    const [loading, setLoading] = useState(false);

    const selectedHandler = (selected) => {
        setSelect(selected);
    };
    const inputController = useCallback((query) => {
        setLoading(true);
        axios
            .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=AIzaSyDFxKWeMhElJnrL0VGaIpPdlbO_tMgcXWs`)
            .then(({ data }) => {
                return data.items.map((item) => ({ ...item, id: item.id.videoId }));
            })
            .then((items) => {
                setVideo(items);
                setLoading(false);
                setSelect(null);
            })
            .catch((e) => {
                console.log(e, "error!");
            });
    }, []);

    useEffect(() => {
        axios
            .get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDFxKWeMhElJnrL0VGaIpPdlbO_tMgcXWs")
            .then(({ data }) => {
                setVideo(data.items);
            })
            .catch((e) => {
                console.log(e, "error");
            });
    }, []);
    return (
        <div className={styles.app}>
            <InputForm inputController={inputController} />
            {loading && <Loadingspinner />}
            <section className={styles.app_section}>
                {select && (
                    <div className={styles.app_detail}>
                        <Detail select={select} />
                    </div>
                )}

                <div className={styles.app_videoList}>
                    <VideoList videoList={video} onSelected={selectedHandler} />
                </div>
            </section>
        </div>
    );
}

export default App;
