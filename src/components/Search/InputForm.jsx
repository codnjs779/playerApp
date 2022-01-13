import React, { useRef, memo } from "react";
import styles from "./InputForm.module.css";

const InputForm = memo(({ inputController }) => {
    const inputRef = useRef();

    const queryHandler = () => {
        const inputTxt = inputRef.current.value;

        inputController(inputTxt);
        inputRef.current.value = "";
    };
    const onInput = () => {
        queryHandler();
    };
    const onKeyPress = (event) => {
        if (event.key === "Enter") {
            queryHandler();
        }
    };

    return (
        <div className={styles.upBox}>
            <div className={styles.logoBox}>
                <div className={styles.logo}>
                    <i className="fas fa-video"></i>
                </div>
                <div className={styles.logoName}>video</div>
            </div>

            <div className={styles.inputBox}>
                <input className={styles.input} type="search" placeholder="Search.." onKeyPress={onKeyPress} ref={inputRef} />
                <button className={styles.inputButton} onClick={onInput} type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
});

export default InputForm;
