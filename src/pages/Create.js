import React, { useContext,  } from "react";
import {
  Button,
  Container,
  Typography,
  makeStyles,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import NotesContext from "../context/NotesCotext";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Notes = () => {
  const noteCtx = useContext(NotesContext)
  const classes = useStyles();
  // const [title, setTitle] = useState();
  // const [detail, setDetail] = useState();
  // const [titleError, setTitleError] = useState(false);
  // const [detailError, setDetailError] = useState(false);
  // const [category, setCategory] = useState("todos");

  // const handlePostRequest = async () => {
  //   const newPost = {
  //     "title":title,
  //     "detail":detail,
  //     "category":category,
  //   }
  //   try {
  //     const response = await axios.post(`${API_URL}`, newPost);
  //     if(response){
  //       navigate("/")
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const handleSubmit = (e) => {
    
  //   e.preventDefault();
  //   setTitleError(false);
  //   setDetailError(false);

  //   if (title == null || title === "") {
  //     setTitleError(true);
  //   }
  //   if (detail == null || detail === "") {
  //     setDetailError(true);
  //   }
  //   if (title && detail) {
  //     handlePostRequest()
  //   }
  // };
  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={noteCtx.handleSubmit}>
        <TextField
          onChange={(e) => noteCtx.setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={noteCtx.titleError}
        />
        <TextField
          onChange={(e) => noteCtx.setDetail(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          minRows={4}
          error={noteCtx.detailError}
        />
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={noteCtx.category}
            onChange={(e) => noteCtx.setCategory(e.target.value)}
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

export default Notes;
