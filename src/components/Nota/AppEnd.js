import React, { useState, useEffect } from "react";
import Notification from "../Notification";
import loginService from "../../services/login";
import LoginForm from "../LoginForm";
import { Alert, AlertTitle } from "@material-ui/lab";
import Home from "../User/Home";


const AppEnd = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);



  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({username,password,});
      if (user.token) {
        window.localStorage.setItem("loggedAppUser", JSON.stringify(user));
        setUser(user);
      } else {
        setErrorMessage(
          <div>
            <Alert severity="error">
              <AlertTitle>
                <h1>Error</h1>
              </AlertTitle>
              {[user[0].response.data.error]}
            </Alert>
          </div>
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    } catch (e) {
      setErrorMessage(
        <div>
          <Alert severity="error">
            <AlertTitle>
              <h1>Error</h1>
            </AlertTitle>
            {console.log(e[0])}
          </Alert>
        </div>
      );
      setTimeout(() => {
        setErrorMessage(null);
      }, 1000);
    }
  };

  return (
    <div>
      <Notification message={errorMessage} />
      {user ? (
        <div>
          <Home />
        </div>
      ) : (
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
      )}
    </div>
  );
};

export default AppEnd;
