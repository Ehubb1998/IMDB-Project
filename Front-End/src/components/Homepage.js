import React, { useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from '../store/actions/auth';
import logo from '../logo/logo.png';
import $ from 'jquery';
import Avengers from '../avengers.jpg';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import RateReviewIcon from '@material-ui/icons/RateReview';
import MovieIcon from '@material-ui/icons/Movie';
import LockIcon from '@material-ui/icons/Lock';
import clip from '../Avengers-Trailer.mp4'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Homepage = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () => {
        window.localStorage.clear();
        dispatch(logOut())
        window.location.href = "/";
    };

    const handleLogoButton = (e) => {
        e.preventDefault();
        history.push(`/homepage/${props.userName}`);
    }

    const handleContainer = () => {
        window.document.getElementById("container-inner").style.cursor = "";
    }

    const handleClicker = () => {
        return;
    }

    setTimeout(() => {
        const loader = window.document.getElementById("loader");
        loader.style.display = "none";
        window.document.getElementById("container-1").style.display = "";
    }, 2300)

    let isPlaying = true;
    const handleVideo = () => {
        const videoBox = window.document.getElementById("recVideo");
        if (isPlaying === true) {
            videoBox.pause();
            isPlaying = false;
        } else {
            videoBox.play();
            isPlaying = true;
        }

    }
    
    let inFullScreen = false;
    useEffect(() => {
        /* We need to create dynamic keyframes to show the animation from full-screen to normal. So we create a stylesheet in which we can insert CSS keyframe rules */
        $("body").append('<style id="lightbox-animations" type="text/css"></style>');
        
        /* Click on the container */
        $("#container-1").on('click', function () {
            if (inFullScreen === true) return;
            window.document.getElementById("recTitle").style.display = "none";
            window.document.getElementById("container-inner").classList.toggle("blurrImg");
            window.document.getElementById("container-1").classList.toggle("blurrImg");
            window.document.getElementById("container-1").classList.toggle("recommendedBox");
            /* The position of the container will be set to fixed, so set the top & left properties of the container */
            var bounding_box = $("#container-1").get(0).getBoundingClientRect();
            $(this).css({ top: bounding_box.top + 'px', left: bounding_box.left + 'px' });
            
            /* Set container to fixed position. Add animation */
            $(this).addClass('in-animation');
            
            /* An empty container has to be added in place of the lightbox container so that the elements below don't come up
            Dimensions of this empty container is the same as the original container */
            $('<div id="empty-container"></div>').insertAfter("#container-1");
            
            /* To animate the container from full-screen to normal, we need dynamic keyframes */
            var styles = '';
            styles = '@keyframes outlightbox {';
            styles += '0% {';
            styles += 'height: 100%;';
            styles += 'width: 100%;';
            styles += 'top: 0px;';
            styles += 'left: 0px;';
            styles += '}';
            styles += '50% {';
            styles += 'height: 200px;';
            styles += 'top: ' + bounding_box.y + 'px;';
            styles += '}';
            styles += '100% {';
            styles += 'height: 200px;';
            styles += 'width: 500px;';
            styles += 'top: ' + bounding_box.y + 'px;';
            styles += 'left: ' + bounding_box.x + 'px;';
            styles += '}';
            styles += '}';
            
            /* Add keyframe to CSS */
            $("#lightbox-animations").get(0).sheet.insertRule(styles, 0);
            
            /* Hide the window scrollbar */
            $("body").css('overflow', 'hidden');
        });
        
        /* Click on close button when full-screen */
        $("#close").on('click', function (e) {
            const videoBox = window.document.getElementById("recVideo");
            videoBox.pause();
            videoBox.currentTime = 0;
            $("#fullscreenBlurr").hide();
            
            window.document.getElementById("container-inner").style.cursor = "pointer";
            window.document.getElementById("container-1").classList.toggle("recommendedBox");
            
            /* Window scrollbar normal */
            $("body").css('overflow', 'auto');
            
            /* Show animation */
            $("#container-1").addClass('out-animation');
            
            e.stopPropagation();
            window.document.getElementById("container-1").classList.toggle("blurrImg");
            window.document.getElementById("recTitle").style.display = "";
        });
        
        /* On animationend : from normal to full screen & full screen to normal */
        $("#container-1").on('animationend', function (e) {
            /* On animation end from normal to full-screen */
            // eslint-disable-next-line
            if (e.originalEvent.animationName == 'inlightbox') {
                // eslint-disable-next-line
                inFullScreen = true;
                $("#fullscreenBlurr").show();
                window.document.getElementById("container-1").classList.toggle("blurrImg");
                window.document.getElementById("container-inner").classList.toggle("positionBox");
                window.document.getElementById("container-1").classList.toggle("positionContainer");
                const videoBox = window.document.getElementById("recVideo");
                videoBox.play();
            }
            /* On animation end from full-screen to normal */
            // eslint-disable-next-line
            else if (e.originalEvent.animationName == 'outlightbox') {
                inFullScreen = false;
                /* Remove fixed positioning, remove animation rules */
                $("#container-1").removeClass('in-animation').removeClass('out-animation');

                /* Remove the empty container that was earlier added */
                $("#empty-container").remove();

                /* Delete the dynamic keyframe rule that was earlier created */
                $("#lightbox-animations").get(0).sheet.deleteRule(0);
                window.document.getElementById("container-1").classList.toggle("blurrImg");
                window.document.getElementById("container-inner").classList.toggle("blurrImg");
            }
        });
    }, [])
    
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{backgroundColor: "lightgrey", color: "black"}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Menu
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Home', 'Watch Later'].map((text, index) => (
                        <ListItem button component={Link} to={index % 2 === 0 ? `/homepage/${props.userName}` : `/watchlater/${props.userName}`} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <WatchLaterIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    {['My Reviews', 'What to Watch'].map((text, index) => (
                        <ListItem button component={Link} to={index % 2 === 0 ? `/myreviews/${props.userName}` : "/newlist"} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <RateReviewIcon /> : <MovieIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Logout'].map((text, index) => (
                        <ListItem button onClick={logout} key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <LockIcon /> : <MovieIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <div id="logo">
                    <a onClick={handleLogoButton} href="/homepage"><img src={logo} alt="logo" style={{ height: "150px" }} /></a>
                </div>
                <div style={{ backgroundColor: "lightgrey", boxShadow: "5px 5px black", position: "static" }}>
                    <h1 style={{ textAlign: "center" }}>Recommended Movie</h1>
                </div>
                <div id="loader" style={{ display: "" }}>
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div onClick={handleClicker} id="container-1" className="recommendedBox" style={{ display: "none" }}>
                        <div id="recTitle" className="positionTitle">
                            <h3 style={{ textAlign: "center" }} >Marvel's The Avengers</h3>
                        </div>
                        <div onClick={handleContainer} style={{ cursor: "pointer", filter: "" }} className="blurrImg" id="container-inner">Marvel's The Avengers</div>
                        <picture id="fullscreenBlurr">
                            <img id="fullscreenImg" src={Avengers} alt=""/>
                            <div id="fullscreenDiv">
                                <button id="close" className="selectionButton" >Close</button>
                                <div id="movie1">
                                    <img style={{height: "450px", width: "320px", overflow: ""}} src={Avengers} alt="" />
                                </div>
                                <div id="fullscreenTitle">
                                    <button style={{ margin: "auto", fontSize: "13px", cursor: "default" }} className="selectionButton" >Marvel's The Avengers</button>
                                </div>
                                <div id="movieTrailers" style={{ position: "absolute", top: "120px", left: "330px", width: "850px", height: "300px" }}>
                                    <video id="recVideo" onClick={handleVideo} width="800"><source src={clip} type="video/mp4" /></video>
                                </div>
                                <div id="movieDetails" style={{position: "absolute", top: "80px", left: "360px", textAlign: "left"}}>
                                    <p>Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.</p>
                                </div>
                            </div>
                        </picture>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homepage;