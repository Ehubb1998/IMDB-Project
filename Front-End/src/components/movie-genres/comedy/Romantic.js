import React from 'react';
// import { useDispatch } from "react-redux";
// import { genreOption } from "../../../store/actions/genre";
import clip from './clips/fifty.mp4'
import poster from './images/thisIs.jpg';
import { useHistory } from 'react-router-dom';

const Romantic = () => {
    const history = useHistory();
    // const dispatch = useDispatch();
    const handleClick = () => {
        const Romantic = "Romantic";
        window.localStorage.setItem("COMEDY_CATEGORY", Romantic);
        history.push("/sign-up")
    };
    const playVideo = () => {
        const videoBox = window.document.getElementById("video-clip");
        videoBox.play();
        // videoBox.style.transition = "transform 1.5s";
        // videoBox.style.transform = "scale(2, 2)";
        // videoBox.style.marginLeft = "300px";
    }
    const stopVideo = () => {
        const videoBox = window.document.getElementById("video-clip");
        videoBox.load();
        // videoBox.style.transition = "transform 1.5s";
        // videoBox.style.transform = "scale(1, 1)";
        // videoBox.style.marginLeft = "";
    }
    return (
        <div>
            <div id="romantic-action" onClick={handleClick} style={{ cursor: "pointer", width: "320px", height: "240px" }}>
                <video onMouseEnter={playVideo} onMouseLeave={stopVideo} id="video-clip" width="320" height="240" poster={poster} loop >
                    <source src={clip} type="video/mp4" />
                </video>
            </div>
            <div onClick={handleClick} style={{ backgroundColor: "lightgrey", width: "320px", fontWeight: "700", borderRadius: "18px", textAlign: "center", cursor: "pointer" }}>
                <h2>Romantic Comedies</h2>
            </div>
        </div>
    )
}

export default Romantic;