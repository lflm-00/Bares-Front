import React from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import fondo from "../img/fondo3.jpg";
const useStyle = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
  container: {
    opacity: "0.9",
    height: "80%",
    width: "40%",
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
      marginTop: 0,
      width: "100%",
      height: "100%",
    },
  },
  div: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "colum",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(5),
    TextField: "center",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {
  const classes = useStyle();
  return (
    <Grid container component="main" className={classes.root}>
      <Container component={Paper} elevation={5} className={classes.container}>
        <div>
          <form className={classes.form}>
            <TextField
              style={{ marginTop: "20px" }}
              fullWidth
              autoFocus
              color="primary"
              variant="outlined"
              label="Nombre"
            />
            <TextField
              style={{ marginTop: "20px" }}
              fullWidth
              color="primary"
              variant="outlined"
              label="Username"
            />
            <TextField
              style={{ marginTop: "20px" }}
              fullWidth
              color="primary"
              variant="outlined"
              label="E-mail"
            />
            <TextField
              style={{ marginTop: "20px" }}
              fullWidth
              type="Password"
              color="primary"
              variant="outlined"
              label="Password"
            />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Registrar
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};

export default Register;
