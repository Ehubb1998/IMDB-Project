import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logOut } from '../store/actions/auth';
import logo from '../logo/logo.png';

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

const Selection = (props) => {
    window.localStorage.setItem("otherComponent", true);
    let count;
    let selected = false;
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

    const selectionButton = () => {
        history.push(`/homepage/${props.userName}`);
        const otherComponent = window.localStorage.getItem("otherComponent");
        if (otherComponent === "true") {
            window.localStorage.removeItem("otherComponent");
        }
    }

    const handleLogoButton = (e) => {
        e.preventDefault();
        history.push(`/homepage/${props.userName}`);
    }

    let selectedArr = [];
    const addCount = (e) => {
        if (selectedArr.includes(e.currentTarget.id) === true) {
            window.document.getElementById(e.currentTarget.id).classList.toggle("hvr-outline-out");
            window.document.getElementById(e.currentTarget.id).classList.toggle("active");
            window.document.getElementById(e.currentTarget.id).classList.toggle("notActive");
            window.document.getElementById(e.currentTarget.id).firstChild.style.border = "";
            for (let i = 0; i < selectedArr.length; i++) {
                let movie = selectedArr[i];
                if (movie === e.currentTarget.id) {
                    selectedArr.splice(i, 1);
                    count--;
                    window.document.getElementById("selectedCount").innerHTML = `Selected: ${count}`;
                    return;
                }
            }
        } else {
            window.document.getElementById(e.target.id).classList.toggle("notActive");
            window.document.getElementById(e.target.id).classList.toggle("hvr-outline-out");
            window.document.getElementById(e.target.id).classList.toggle("active");
            window.document.getElementById(e.target.id).firstChild.style.border = "7px solid white";
            selectedArr.push(e.target.id);
            console.log(selectedArr);
        }
        if (selected === false) {
            count = 1;
            selected = true;
            window.document.getElementById("selectedCount").innerHTML = `Selected: ${count}`;
        } else {
            if (count === 8) {
                return;
            } else {
                count++;
                window.document.getElementById("selectedCount").innerHTML = `Selected: ${count}`;
            }
        }
    }

    setTimeout(() => {
        const loader = window.document.getElementById("loader");
        loader.style.display = "none";
        window.document.getElementById("selectionDiv").style.display = "";
        window.document.getElementById("selectedCountDiv").style.display = "flex";
    }, 2300)

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
                        {props.userName}
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
                    <h1 style={{ textAlign: "center" }}>Hey {props.userName}, do you like any of these movies below?</h1>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <h2 style={{ textAlign: "center" }}>The more you pick, the better I'll be able to know what you like</h2>
                </div>
                <div id="selectedCountDiv" style={{ display: "none"}}>
                    <div style={{ display: "flex", width: "1232px", justifyContent: "space-between" }}>
                        <h2 id="selectedCount">Selected: {count}</h2>
                        <div className="selectionContainer">
                            <button onClick={selectionButton} className="selectionButton" >Continue</button>
                        </div>
                    </div>
                </div>
                <div id="loader" style={{display: ""}}>
                    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                <div id="selectionDiv" style={{display: "none"}}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <div id="slide1" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{width: "300px", height: "400px", border: ""}} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" />
                        </div>
                        <div id="slide2" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{width: "300px", height: "400px", border: ""}} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/9aq2sHfkkAFwH0wi4bZasXA8NbS.jpg" />
                        </div>
                        <div id="slide3" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{width: "300px", height: "400px", border: ""}} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg" />
                        </div>
                        <div id="slide4" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{width: "300px", height: "400px", border: ""}} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/gncn6h4AKNvb3NavVQXo1gvqfB6.jpg" />
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "10px" }}>
                        <div id="slide5" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{ width: "300px", height: "400px", border: "" }} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg" />
                        </div>
                        <div id="slide6" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{ width: "300px", height: "400px", border: "" }} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/rLGGdPsU4m9TNjCpUMr1GlMuO8y.jpg" />
                        </div>
                        <div id="slide7" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{ width: "300px", height: "400px", border: "" }} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/tCpmXeXtzNIxqcpkDwkHpvd9M25.jpg" />
                        </div>
                        <div id="slide8" className="hvr-outline-out hvr-shrink notActive" onClick={addCount} style={{ cursor: "pointer", width: "300px", height: "400px", borderTop: "", borderLeft: "", borderRight: "", borderBottom: ""}}>
                            <img style={{ width: "300px", height: "400px", border: "" }} alt="moviePoster" src="https://imdb-lite-movie-posters.s3.amazonaws.com/Movie-Info/Posters/tKOb2QvEb038DqiRVU7kwhPlSxV.jpg" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Selection;