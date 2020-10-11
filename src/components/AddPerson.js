import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline } from "@material-ui/icons/";

const useStyles = makeStyles({
  paper: {
    background: "#1a846b",
    marginTop: "2rem",
    padding: "2rem",
    borderRadius: "1rem",
  },
  text: {
    color: "#fff",
  },
  button: {
    borderRadius: "1rem",
    marginTop: "2rem",
    color: "#fff",
    backgroundColor: "#121212",
    "&:hover": {
      backgroundColor: "#353535",
    },
    padding: ".5rem 1rem",
  },
});

export default function AddPerson(props) {
  const classes = useStyles();
  return (
    <Paper
      square={false}
      elevation={3}
      className={classes.paper}
      align="center"
    >
      <Typography variant="h5" className={classes.text}>
        Click the button to add a person 👇
      </Typography>
      <Button
        onClick={props.clicked}
        className={classes.button}
        startIcon={<AddCircleOutline />}
      >
        Add Person
      </Button>
    </Paper>
  );
}
