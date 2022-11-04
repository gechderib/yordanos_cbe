import { Container, Grid } from "@material-ui/core";
import React, { useContext, } from "react";
// import { useNavigate } from "react-router-dom";
import NotesCard from "../components/NotesCard";
import NotesContext from "../context/NotesCotext";

// const API_URL = "http://localhost:8000/notes";

const Create = () => {
  // const navigate = useNavigate();
  const notesCtx = useContext(NotesContext)

  // const [notes, setNotes] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const getNotes = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}`);
  //       if (response) {
  //         setIsLoading(false);
  //         setNotes(response.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getNotes();
  // }, []);

  // const handleDelete = async(id) => {
  //   const newNotes =  notes.filter(note => note.id !== id);
  //   try{
  //     const response = await axios.delete(`${API_URL}/${id}`)
  //     if(response){
  //       setNotes(newNotes);
  //       console.log(response.data)
  //     }
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <Container>
      
      <Grid container spacing={3}>
        {notesCtx.notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={3}>
            <NotesCard  note={note} handleDelete={()=>notesCtx.handleDelete(note.id)}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Create;
