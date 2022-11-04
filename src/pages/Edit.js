import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import axios from "axios";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesContext from "../context/NotesCotext";

const useStyles = makeStyles({
  field: {
    marginBottom: 20,
    display: "block",
  },
});
const API_URL = "http://localhost:8000/notes";
const EditPage = () => {
  const notesCtx = useContext(NotesContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const classes = useStyles();
  const editdata = JSON.parse(localStorage.getItem("note"));
  console.log("=======");
  console.log(editdata);
  console.log("=======");
  const handleEdit = async (id) => {
    const editedNote = {
      title: notesCtx.titleEdit,
      detail: notesCtx.detailEdit,
      category: notesCtx.categoryEdit,
      id: id,
    };
    try {
      const response = await axios.put(`${API_URL}/${id}`, editedNote);
      if (response) {
        notesCtx.setCategory(notesCtx.categoryEdit);
        notesCtx.setDetail(notesCtx.detailEdit);
        notesCtx.setTitle(notesCtx.titleEdit);
        navigate("/");
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEdit(id);
        }}
      >
        <TextField
          className={classes.field}
          value={notesCtx.titleEdit}
          onChange={(e) => notesCtx.setTitleEdit(e.target.value)}
          variant="outlined"
          label="Edit Title"
          color="secondary"
          fullWidth
        />
        <TextField
          className={classes.field}
          value={notesCtx.detailEdit}
          onChange={(e) => notesCtx.setDetailEdit(e.target.value)}
          variant="outlined"
          label="Edit Detail"
          color="secondary"
          fullWidth
          multiline
          minRows={4}
        />
        <FormControl className={classes.field}>
          <FormLabel>Category</FormLabel>
          <RadioGroup
            value={notesCtx.categoryEdit}
            onChange={(e) => notesCtx.setCategoryEdit(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default EditPage;
