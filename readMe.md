# **IMDB Project**

## **Coming Soon to a Screen Near You!**

## **About**

![eubb](https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_1687,w_1687,x_818,y_-1/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1570369979/191002-leon-joker-tease_sj5zax)

_Ehubb's first Front-End Application recreating IMDB!_

---

## **Brief Explanation of The App** 

- This app will help solve the ancient issue of "What do I want to watch?" Taking inspiration of IMDB, this will be your one-stop shop for figuring out what to watch. You go thru a series of questions that will personalize your taste in movies. Once you log in, you'll be given a list of recommended movies to watch and you can search for movies in your preferred genre. You'll also be able to save movies into a list of "watch later", rate and review movies, as well as create your own movie ranking list. 

---

## **Technologies Used**

- **Front-End**

    - HTML5
    - CSS3
    - JavaScript
        - React
        - Redux

- **Back-End**

    - PostgreSQL
    - Express

---

## **Discussion of two features that show off technical abilities**

- A more advanced and secure form of user authentication was a great way to elevate the app. The sign up form has validations for each individual input field and requires the user to have a strong password. Once logged in, the app knows who you are and greets you.

- When you hover over a specific movie genre image, the app expands the image and plays a short clip fromm a movie in that genre. While still hovering over the clip, if you click it, the clip will expand into fullscreen and when you click again it exits fullscreen

---

## **Discussion of challenges faced and the way it was solved**

- The hardest feature to implement by a mile was the hover effect for playing the movie clips. It took me about 2 days to figure it out. The way I was able to figure it out was by using a css animation I had on a button and just implementing those same transitions for the video element. 

## **Code snippets to highlight the best code**

```js
    const playVideo = () => {
        const videoBox = window.document.getElementById("video-clip1");
        const genreButton = window.document.getElementById("genreButton1");
        genreButton.style.display = "none";
        videoBox.play();
    }
    const stopVideo = () => {
        const videoBox = window.document.getElementById("video-clip1");
        const genreButton = window.document.getElementById("genreButton1");

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
        const videoBox = window.document.getElementById("video-clip1");
        if (fullscreenView === false) {
            fullscreenView = true;
            videoBox.requestFullscreen();
        } else {
            if (e.target.id === "video-clip1") {
                mouseOnVideo = true;
                fullscreenView = false;
                justExit = true;
                const genreButton = window.document.getElementById("genreButton1");
                genreButton.style.display = "none";
                stopVideo();
                window.document.exitFullscreen();
            }
            mouseOnVideo = false;
            stopVideo();
        }
    }
```

## **Features Coming Soon**

- Fully realized and interactive homepage.
- Can save movies in watch later list.
- Can leave reviews on a movie.
- Can watch trailers from a specific movie.