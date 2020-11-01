import React from 'react';
// import { useDispatch } from "react-redux";
// import { genreOption } from "../../../store/actions/genre";
import clip from './clips/ted.mp4'
import poster from './images/americanPie.jpeg';
import { useHistory } from 'react-router-dom';

const AdultC = () => {
    const history = useHistory();
    // const dispatch = useDispatch();
    const handleClick = () => {
        const AdultC = "AdultC";
        window.localStorage.setItem("COMEDY_CATEGORY", AdultC);
        history.push("/sign-up")
    };
    const playVideo = () => {
        const videoBox = window.document.getElementById("video-clip2");
        videoBox.play();
        // videoBox.style.transition = "transform 1.5s";
        // videoBox.style.transform = "scale(2, 2)";
        // videoBox.style.marginLeft = "300px";
    }
    const stopVideo = () => {
        const videoBox = window.document.getElementById("video-clip2");
        videoBox.load();
        // videoBox.style.transition = "transform 1.5s";
        // videoBox.style.transform = "scale(1, 1)";
        // videoBox.style.marginLeft = "";
    }
    return (
        <div>
            <div id="adultC-action" onClick={handleClick} style={{ cursor: "pointer", width: "320px", height: "240px" }}>
                <video onMouseEnter={playVideo} onMouseLeave={stopVideo} id="video-clip2" width="320" height="240" poster={poster} loop >
                    <source src={clip} type="video/mp4" />
                </video>
            </div>
            <div onClick={handleClick} style={{ backgroundColor: "lightgrey", width: "320px", fontWeight: "700", borderRadius: "18px", textAlign: "center", cursor: "pointer" }}>
                <h2>Adult Comedies</h2>
            </div>
        </div>
    )
}

export default AdultC;