import React, {  useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../Components/Text";
import {toJpeg} from "html-to-image";
const EditPage = () => {
    const handleExport = () => {
        if (memeRef.current === null) {
            return;
        }
        const options = {
            quality: 1,
            backgroundColor: "#ffffff" 
        };

        toJpeg (memeRef.current, options)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "meme.jpeg";
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error("Error exporting image:", error);
            });
    };
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);
    const memeRef = createRef ();
    const addText = () => {
        setCount(count + 1);
    };
    return (
    <div>
        <div ref={memeRef} className="meme">
            <img src={params.get("url")} width="250px" />
            {Array(count)
            .fill(0)
            .map((e) => (
                <Text/>
            ) )}
        </div>
        <button onClick={addText}>Add Text</button>
        <button variant="success" onClick={handleExport}>Save</button>
    </div>
    )
}
export default EditPage;