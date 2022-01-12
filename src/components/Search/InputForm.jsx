import React, { useRef } from "react";

function InputForm({ inputController }) {
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
        <>
            <div>
                <div>
                    <i className="fas fa-video"></i>
                </div>
                <div>video</div>
            </div>

            <div>
                <input type="search" placeholder="Search.." onKeyPress={onKeyPress} ref={inputRef} />
                <button onClick={onInput} type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </>
    );
}

export default InputForm;
