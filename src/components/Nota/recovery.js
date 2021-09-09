import React, { useState, useEffect } from "react";

import Notification from "../Notification";
import noteService from "../../services/notes";
import loginService from "../../services/login";
import LoginForm from "../LoginForm";
import { Alert, AlertTitle } from "@material-ui/lab";
import Home from "../User/Home";
import Register from "../Register";
import { useHistory } from "react-router-dom";

const AppEnd = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [USER_ROLE, setUSER_ROLE] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const handleLogout = () => {
    setUser("");
    window.localStorage.removeItem("loggedAppUser");
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);

      noteService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    
    try {
      const user = await loginService.login({
        USER_ROLE,
        username,
        password,
        email,
      });

      window.localStorage.setItem("loggedAppUser", JSON.stringify(user));

      noteService.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
      setUSER_ROLE("");
      setEmail("");
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

      {user ? (
        ((<Home />),
        (
          <div>
            <div>
              { user.USER_ROLE === "admin" ?<button onClick={handleLogout}>Logout admin</button>
              :<button onClick={handleLogout}>Logout user</button>}


            </div>
          </div>
        ))
      ) : (
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
        
      )}

      {/* <ul>
          {notesToShow.map((note, i) => (
            <Note
              key={i}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul> */}
    </div>
  );
};

export default AppEnd;
