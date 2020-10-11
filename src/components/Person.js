import React from "react";
import {
  Paper,
  Typography,
  Button,
  Grid,
  Avatar,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { HighlightOff } from "@material-ui/icons";

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#8d52ac",
    borderRadius: "1rem",
    margin: "2rem 0",
  },
  avatar: {
    width: "5rem",
    height: "5rem",
  },
  button: {
    borderRadius: "1rem",
    color: "#121212",
    backgroundColor: "#f796ae",
    "&:hover": {
      backgroundColor: "#f5b3c3",
    },
    padding: ".5rem 1rem",
  },
  text: {
    color: "#fff",
  },
  textSecondary: {
    color: "#c3c3c3",
  },
});

export default function Person(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container alignItems="center">
        <Grid item>
          <Box m={2}>
            <Avatar
              alt={props.name}
              src={props.img}
              className={classes.avatar}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm container alignItems="center">
          <Grid item xs container direction="column">
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                className={classes.text}
              >
                {props.name}
              </Typography>
              <Typography variant="body2" className={classes.textSecondary}>
                Age: {props.age}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Box m={2}>
              <Button
                onClick={props.clicked}
                className={classes.button}
                startIcon={<HighlightOff />}
              >
                Remove
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
