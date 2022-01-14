import React from "react";
import styles from "./Loadingspinner.module.css";
import loadingImg from "./Ring Preloader.gif";

function Loadingspinner() {
    return (
        <section className={styles.loading}>
            <div className={styles.spinner}>
                <img src={loadingImg} alt="loading" />
            </div>
        </section>
    );
}

export default Loadingspinner;
