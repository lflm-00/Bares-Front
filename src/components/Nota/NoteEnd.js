import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notification";
import noteService from "./services/notes";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm.js";
import NoteForm from "./components/NoteForm.js";

const NoteEnd = () => {
  const [notes, setNotes] = useState([]);

  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const [username, setUsername] = useState("");
  const [USER_ROLE, setUSER_ROLE] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);

      noteService.setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    setUser("");
    noteService.setToken(null);
    window.localStorage.removeItem("loggedNoteAppUser");
  };

  const addNote = (noteObject) => {
    noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        USER_ROLE,
        username,
        password,
        email,
      });
      console.log(user);
      window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));

      noteService.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
      setUSER_ROLE("");
      setEmail("");
    } catch (e) {
      setErrorMessage(alert("Wrong Credentials"));
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      {user.USER_ROLE === "usuario" ? (
        <h1>user</h1>
      ) : user.USER_ROLE === "admin" ? (
        <h1>Admin</h1>
      ) : (
        <h1>Invitado</h1>
      )}

      <Notification message={errorMessage} />

      {user ? (
        ((<NoteForm addNote={addNote} handleLogout={handleLogout} />),
        (
          <div>
            <button onClick={handleLogout}>Logout</button>
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

      {user.USER_ROLE === "admin" ? (
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? "important" : "all"}
          </button>
        </div>
      ) : (
        ""
      )}
      <ul>
        {notesToShow.map((note, i) => (
          <Note
            key={i}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteEnd;
