import React, { useState, useEffect } from "react";
import userService from "../../services/user";


export default function Home() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState([
    JSON.parse(window.localStorage.getItem("loggedAppUser")) || null,
  ]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      setUser(user);
      const id = user.id;

      userService.getUser(id).then((initialUser) => {
        setUser(initialUser);
      });

      // noteService.setToken(user.token);
    }
  }, []);

  return <h1>Hola {user.name}</h1>;
}
