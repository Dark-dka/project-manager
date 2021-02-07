import React, { useContext } from "react";
import {
  Paper,
  Typography,
  Container,
  Box,
  Avatar,
  Button,
  Grid,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { boardStyles } from "./styles";

const address =
  "https://images.unsplash.com/photo-1612689690865-2035b60c449b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

const Boards = () => {
  const classes = boardStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <img className={classes.cover} src={address} />
        <Typography className={classes.title} variant="body1" gutterBottom>
          All Boards
        </Typography>
      </Paper>
    </div>
  );
};

export default Boards;
