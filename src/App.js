import './App.css';
import {Note} from './Note'
import { useEffect,useState} from 'react';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';


export default function App() {
  const [notes , setNotes] = useState([]);
  const [newNote , setNewNote] = useState('');
  const [ loading , setLoading] = useState(false);
  const [Error , setError] = useState('')

  useEffect(() =>{
    setLoading(true)
      getAllNotes()
        .then(notes =>{
          setNotes(notes)
          setLoading(false)
        })
    } , []);
    


  const handleChange = (event) =>{
    setNewNote(event.target.value)
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    const noteToAddToState = { 
      id : notes.length + 1,
      title : newNote ,
      body : newNote,
      userId : 1
  };
  setError("")
  createNote(noteToAddToState)
    .then(newNote => {
      setNotes((prevNotes) => prevNotes.concat(newNote));
    })
    .catch((error) =>{
      console.error(error)
      setError('the api is truncated')
    });
    
    
  console.log(noteToAddToState); 
  //setNotes([...notes , noteToAddToState]);
  setNewNote("")

  };


  return (
  <div>
      <h1>Notes</h1>
      {loading ? "Cargando ..." : ""}
    <ol>
      {notes
      .map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </ol>
      <form onSubmit={handleSubmit}>
      <input type='text'  onChange={handleChange} value={newNote}/>
      <button>Crear Nota</button>
    </form>
    { Error ? Error : "" }
  </div>
  );
}
