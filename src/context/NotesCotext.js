import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:8000/notes";

const NotesContext = createContext({
});

export const NotesContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [notes, setNotes ] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [titleError, setTitleError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [category, setCategory] = useState("todos");

  const [titleEdit, setTitleEdit] = useState("");
  const [detailEdit, setDetailEdit] = useState("");
  const [categoryEdit, setCategoryEdit] = useState('todos')


  useEffect(()=> {
    const getNotes = async () => {
        try {
          const response = await axios.get(`${API_URL}`);
          if (response) {
            setIsLoading(false);
            setNotes(response.data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getNotes();
  },[title,detail])


  const handleDelete = async(id) => {
    const newNotes =  notes.filter(note => note.id !== id);
    try{
      const response = await axios.delete(`${API_URL}/${id}`)
      if(response){
        setNotes(newNotes);
        console.log(response.data)
      }
    }catch(err){
      console.log(err)
    }
  }
  
  const handlePostRequest = async () => {
    const newPost = {
      title: title,
      detail: detail,
      category: category,
    };
    try {
      const response = await axios.post(`${API_URL}`, newPost);
      if (response) {
        setTitle("");
        setDetail("");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailError(false);

    if (title == null || title === "") {
      setTitleError(true);
    }
    if (detail == null || detail === "") {
      setDetailError(true);
    }
    if (title && detail) {
      handlePostRequest();
    }
  };

  const context = {
    title,
    detail,
    titleError,
    detailError,
    category,
    notes,
    handleSubmit,
    handleDelete,
    setTitle,
    setDetail,
    setCategory,
    titleEdit,
    setTitleEdit,
    detailEdit,
    setDetailEdit,
    categoryEdit,
    setCategoryEdit
  };
  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
};

export default NotesContext;
