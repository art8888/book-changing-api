import React from "react";

import { AppBar, Toolbar, IconButton  } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Header() {
    const classes = useStyles();

    const displayTitle = () => {
        return (
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"></IconButton>
            <Typography variant="h6" className={classes.title}>Books changing API</Typography>
        </Toolbar>
        );
    }

    return (
        <AppBar position="static">{displayTitle()}</AppBar>
    )
}    