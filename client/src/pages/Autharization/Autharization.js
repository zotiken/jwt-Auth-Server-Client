import React, { useState,useContext } from "react";
import { TextField, Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {AuthContext} from "../../component/Context/Auth/Auth"
// import {useAuth} from '../../hook/useAuth.hook'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "30vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const classes = useStyles();
  const auth = useContext(AuthContext);
  return (
    <Container className={classes.root} maxWidth="xl">
      <form className={classes.form} noValidate autoComplete="off">
        <Typography variant="h4" component="h2" gutterBottom>
          LogIn
        </Typography>
        <TextField
          // required
          id="outlined-required"
          label="email"
          onChange={(e)=> setemail(e.target.value)}
          value={email}
          // defaultValue="Hello World"
          variant="outlined"
        />
        <TextField
          // required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e)=>setpassword(e.target.value)}
          value={password}
        />
        <Button variant="contained" onClick={()=> auth.login({email,password})}>Send</Button>
      </form>{" "}
    </Container>
  );
}
