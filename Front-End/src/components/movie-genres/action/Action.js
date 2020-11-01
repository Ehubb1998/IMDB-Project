import React from 'react';
// import { useDispatch } from "react-redux";
// import { genreOption } from "../../../store/actions/genre";
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import AvengerImg from './images/infinitywar.jpg';
// import { useHistory } from 'react-router-dom';

const image = {
    url: AvengerImg,
    title: 'Action',
    width: '80%',
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

const Action = (props) => {
    // const history = useHistory();
    // const dispatch = useDispatch();
    const classes = useStyles();
    const handleClick = () => {
        const action = "action";
        window.localStorage.setItem("CATEGORIES", action);
        // history.push("/action")
        window.location.href = "/action"
    };

    return (
        <div className={classes.root}>
            <ButtonBase
                onClick={handleClick}
                value="action"
                id="action-button" type="submit"
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: image.width,
                }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${image.url})`,
                    }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {image.title}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            </ButtonBase>
        </div>
    )
}

// style = "width: 20px;height: 17px;box-shadow: 1px 1px 2px black"
// onMouseEnter = {onHover}
// onMouseLeave = {leaveHover}

export default Action;