import React, { useState } from "react";
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AddCircleOutline } from "@material-ui/icons/";

import { useDispatch } from "react-redux";
import { add } from "../features/persons/personsSlice";

export default function AddPerson() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const dispatch = useDispatch();

  return (
    <Paper
      square={false}
      elevation={3}
      className={classes.paper}
      align="center"
    >
      <Typography variant="h5" className={classes.text}>
        Enter a Name and Age to add a person 👇
      </Typography>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        color="primary"
        style={{ "margin-top": "1rem" }}
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        style={{ margin: "1rem 0 0 1rem" }}
        onChange={(event) => setAge(event.target.value)}
        value={age}
      />
      <Button
        onClick={() => dispatch(add({ name, age }))}
        className={classes.button}
        startIcon={<AddCircleOutline />}
      >
        Add Person
      </Button>
    </Paper>
  );
}

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
