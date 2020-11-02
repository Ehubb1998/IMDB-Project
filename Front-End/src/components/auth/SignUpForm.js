import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import logo from '../../logo/logo.png';
import { updateEmailValue, updateUserNameValue, updatePasswordValue, updateCPValue, signUp } from '../../store/actions/auth';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import HomeIcon from '@material-ui/icons/Home';
// import WatchLaterIcon from '@material-ui/icons/WatchLater';
// import RateReviewIcon from '@material-ui/icons/RateReview';
import MovieIcon from '@material-ui/icons/Movie';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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

const SignUpForm = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");


    useEffect(() => {
        if (props.msg) {
            const errDiv = window.document.querySelector(".errDiv");
            const errTitle = window.document.createElement("h4")
            const invalidCred = window.document.createElement("li");
            errTitle.innerHTML = `${props.title}`;
            errTitle.setAttribute("style", "font-size: 30px;font-weight: 700;color: red");
            invalidCred.innerHTML = `${props.msg}`;
            invalidCred.setAttribute("style", "font-size: 20px;color: black");
            errDiv.innerHTML = "";
            errTitle.appendChild(invalidCred);
            errDiv.appendChild(errTitle);
            if (props.msg === "Please fill out Email field") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out Username field") {
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Sorry, that Username already exists") {
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please follow Password requirements") {
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = "red"
            }
            if (props.msg === "Password and Confirmed Password must match") {
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderColor = "red"
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = ""
            }
            if (props.msg === "Please fill out all required fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderColor = "red"
            }
            if (props.msg === "Please fill out Email and Username fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderColor = ""
                window.document.getElementById("cpField").style.borderColor = ""
            }
            if (props.msg === "Please fill out Username and Password fields") {
                window.document.getElementById("emailField").style.borderColor = ""
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderColor = "red"
            }
            if (props.msg === "Please fill out Email and Password fields") {
                window.document.getElementById("emailField").style.borderColor = "red"
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = "red"
                window.document.getElementById("cpField").style.borderColor = "red"
            }
        }
    }, [props.msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(userName, email, password, confirmedPassword);
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updateConfirmedPassword = (e) => {
        setConfirmedPassword(e.target.value);
    }
    const handleLogoButton = () => {
        window.localStorage.clear();
        window.location.href = "/"
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
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
                {/* <Divider />
                <List>
                    {['Home', 'Watch Later'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <WatchLaterIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    {['My Reviews', 'What to Watch'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <RateReviewIcon /> : <MovieIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider /> */}
                <List>
                    {['Login'].map((text, index) => (
                        <ListItem button component="a" href="/log-in" key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <AccountCircleIcon /> : <MovieIcon />}</ListItemIcon>
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
                {/* <div>
                    <form className="create-user-form">
                        <h1 className="new-user-page">Sign Up to See Your Recommended List with IMDB Lite!</h1>
                        <div className="errDiv"></div>
                        <label htmlFor="email">Email</label>
                        <input onChange={updateEmail} value={email} type="email" name="email" id="emailField" className="sign-up-form" placeholder="imdblite@example.com" required />
                        <label htmlFor="userName">Username</label>
                        <input onChange={updateUserName} value={userName} type="text" name="userName" id="userNameField" className="sign-up-form" placeholder="IMDB" required />
                        <label htmlFor="password">Password</label>
                        <input onChange={updatePassword} value={password} type="password" name="password" id="passwordField" className="sign-up-form" required />
                        <label htmlFor="confirmedPassword">Confirm Password</label>
                        <input onChange={updateConfirmedPassword} value={confirmedPassword} type="password" name="confirmedPassword" id="cpField" className="sign-up-form" required />
                        <button onClick={handleSubmit} className="create-user-button">Create</button>
                    </form>
                </div> */}
                    <div id="logo">
                    <a onClick={handleLogoButton} href="/"><img src={logo} style={{ height: "100px" }} /></a>
                    </div>
                <div className="create-user-form" style={{ backgroundColor: "lightgray", borderRadius: "18px" }}>
                    <Form>
                        <h1 id="signin-header">Sign Up to See Your Recommended List with IMDB Lite!</h1>
                        <div className="errDiv"></div>
                        <p>Use 8 or more characters with at least 1 uppercase letter and a mix of numbers and/or symbols</p>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={updateEmail} type="email" value={email} id="emailField" placeholder="Enter Email" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Username</Form.Label>
                            <Form.Control onChange={updateUserName} value={userName} type="text" id="userNameField" placeholder="Enter Username" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={updatePassword} type="password" value={password} id="passwordField" required />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={updateConfirmedPassword} type="password" value={confirmedPassword} id="cpField" required />
                        </Form.Group>
                        <Button variant="primary" onClick={handleSubmit} type="submit" className="create-user-button">Create</Button>
                    </Form>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        userName: state.auth.userName,
        password: state.auth.password,
        CP: state.auth.CP,
        title: state.auth.title,
        msg: state.auth.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateEmailValue: (event) => dispatch(updateEmailValue(event.target.value)),
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            updateCPValue: (event) => dispatch(updateCPValue(event.target.value)),
            signUp: (userName, email, password, confirmedPassword) => dispatch(signUp(userName, email, password, confirmedPassword)),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);