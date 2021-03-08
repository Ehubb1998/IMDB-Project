import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import logo from '../../logo/logo.png';
import { updateUserNameValue, updatePasswordValue, logIn, demo, demoValues } from '../../store/actions/auth';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

const LogInForm = (props) => {
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
    const [password, setPassword] = useState("");
    

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
            if (props.msg === "The provided Username does not exist") {
                window.document.getElementById("userNameField").style.borderColor = "red"
                window.document.getElementById("passwordField").style.borderColor = ""
            }
            if (props.msg === "The provided Password is invalid") {
                window.document.getElementById("userNameField").style.borderColor = ""
                window.document.getElementById("passwordField").style.borderColor = "red"
            }
        }
        // eslint-disable-next-line
    }, [props.msg])

    const handleSubmit = (e) => {
        e.preventDefault();
        props.logIn(userName, password);
    }

    const updateUserName = (e) => {
        setUserName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleDemo = (e) => {
        e.preventDefault();
        setUserName("Demo");
        setPassword("test");
        props.demoValues();
        props.demo();
    }

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
                <List>
                    {['Login'].map((text, index) => (
                        <ListItem button component={Link} to="/log-in" key={text}>
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
                    <div id="logo">
                        <a href="/"><img src={logo} alt="logo" style={{ height: "100px" }} /></a>
                    </div>
                <div className="log-in-form">
                    <div style={{backgroundColor: "lightgray", borderRadius: "18px"}}>
                        <Form>
                            <h1 id="Login-header">Sign in to IMDB Lite</h1>
                            <div className="errDiv"></div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control onChange={updateUserName} type="text" value={userName} id="userNameField" placeholder="Enter Username" required />
                                <Form.Text className="text-muted">
                                    Welcome Back to Paradise!
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={updatePassword} value={password} type="password" id="passwordField" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" onClick={handleSubmit} type="submit" className="log-in-button">Submit</Button>
                            <span style={{marginLeft: "4px"}}>
                            <Button onClick={handleDemo} styleclassName="demoButton" variant="primary" type="submit" >Demo</Button>
                            </span>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userName: state.auth.userName,
        password: state.auth.password,
        title: state.auth.title,
        msg: state.auth.msg,
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            updateUserNameValue: (event) => dispatch(updateUserNameValue(event.target.value)),
            updatePasswordValue: (event) => dispatch(updatePasswordValue(event.target.value)),
            logIn: (userName, password) => dispatch(logIn(userName, password)),
            demo: () => dispatch(demo()),
            demoValues: () => dispatch(demoValues()),
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);