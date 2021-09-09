import React, { useState } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link} from "react-router-dom";
import fondo from "../img/fondo3.jpg";
import userService from "../services/user";
import Notification from "./Notification";
import { Alert, AlertTitle } from "@material-ui/lab";

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

  const [errorMessage, setErrorMessage] = useState(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();


    console.log(event.name);
    try {
      const user = await userService.userRegister({
        name,
        username,
        email,
        password,
      });

      
      
      user
        ? setErrorMessage(
            <div>
              <Alert severity="alert">
                <AlertTitle>
                  <h1>Creado</h1>
                </AlertTitle>
                Exitosamente
              </Alert>
            </div>
          )
        : setErrorMessage(
            <div>
              <Alert severity="error">
                <AlertTitle>
                  <h1>Error</h1>
                </AlertTitle>
                Wrong Credentials
              </Alert>
            </div>
          );
      setUsername("");
      setPassword("");
      setEmail("");
      setName("");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    } catch (e) {
      setErrorMessage(
        <div>
          <Alert severity="error">
            <AlertTitle>
              <h1>Error</h1>
            </AlertTitle>
            Wrong Credentials
          </Alert>
        </div>
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <Notification message={errorMessage} />
      <Grid container component="main" className={classes.root}>
        <Container
          component={Paper}
          elevation={5}
          className={classes.container}
        >
          <div>
            <form className={classes.form} onSubmit={handleRegister}>
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                autoFocus
                color="primary"
                variant="outlined"
                label="Nombre"
                value={name}
                pattern="[A-Za]"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                color="primary"
                variant="outlined"
                label="Username"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                style={{ marginTop: "20px" }}
                type="Email"
                fullWidth
                color="primary"
                variant="outlined"
                label="E-mail"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                style={{ marginTop: "20px" }}
                fullWidth
                type="Password"
                color="primary"
                variant="outlined"
                label="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Registrar
              </Button>
            </form>
            <Link
              variant="contained"
              color="secondary"
              className={classes.button}
              to="/"
            >
              Back
            </Link>
          </div>
        </Container>
      </Grid>
    </div>
  );
};

export default Register;
