import React from 'react';
import clip from './clips/ted.mp4'
import poster from './images/americanPie.jpeg';
import { useHistory } from 'react-router-dom';

const AdultC = () => {
    let counter = 0;
    let fullscreenView = false;
    let justExit = false;
    let mouseOnVideo = false;
    const history = useHistory();
 
    const handleClick = () => {
        const AdultC = "AdultC";
        window.localStorage.setItem("COMEDY_CATEGORY", AdultC);
        history.push("/sign-up")
    };
    const playVideo = () => {
        const videoBox = window.document.getElementById("video-clip2");
        const genreButton = window.document.getElementById("genreButton2");
        genreButton.style.display = "none";
        videoBox.play();
    }
    const stopVideo = () => {
        const videoBox = window.document.getElementById("video-clip2");
        const genreButton = window.document.getElementById("genreButton2");

        if (mouseOnVideo === true) {
            if (justExit === true) {
                justExit = false;
            }
            counter++;
            genreButton.style.display = "none";
        } else {
            if (counter === 1) {
                counter = 0;
            } else {
                mouseOnVideo = false;
                genreButton.style.display = "inline-block";
                videoBox.load();
            }
        }
    }
    const fullscreen = (e) => {
        const videoBox = window.document.getElementById("video-clip2");
        if (fullscreenView === false) {
            fullscreenView = true;
            videoBox.requestFullscreen();
        } else {
            if (e.target.id === "video-clip2") {
                mouseOnVideo = true;
                fullscreenView = false;
                justExit = true;
                const genreButton = window.document.getElementById("genreButton2");
                genreButton.style.display = "none";
                stopVideo();
                window.document.exitFullscreen();
            }
            mouseOnVideo = false;
            stopVideo();
        }
    }
    return (
        <div>
            <div>
                <div id="adultC-comedy" className="videoBox2" style={{ cursor: "pointer", width: "320px", height: "240px" }}>
                    <video onMouseEnter={playVideo} onMouseLeave={stopVideo} onClick={fullscreen} id="video-clip2" width="320" height="240" poster={poster} loop >
                        <source src={clip} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div onClick={handleClick} className="hvr-grow-shadow" id="genreButton2" style={{ backgroundColor: "lightgrey", width: "320px", fontWeight: "700", borderRadius: "18px", textAlign: "center", cursor: "pointer" }}>
                <h2>Adult Comedies</h2>
            </div>
        </div>
    )
}

export default AdultC;