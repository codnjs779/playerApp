import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import VideoList from "./components/Popular/VideoList";
import InputForm from "./components/Search/InputForm";
import Detail from "./components/Detail/Detail";
import Loadingspinner from "./components/Loading/Loadingspinner";

function App({ youtube }) {
    const [video, setVideo] = useState();
    const [select, setSelect] = useState();
    const [loading, setLoading] = useState(false);

    const selectedHandler = (selected) => {
        setSelect(selected);
    };
    const inputController = useCallback(
        (query) => {
            setLoading(true);
            setSelect(null);
            youtube
                .inputController(query) //
                .then((videos) => {
                    setVideo(videos);
                    setLoading(false);
                });
        },
        [youtube]
    );

    useEffect(() => {
        youtube.mostPopular().then((videos) => {
            setVideo(videos);
        });
    }, [youtube]);

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
