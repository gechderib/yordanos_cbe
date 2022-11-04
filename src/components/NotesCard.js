import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import NotesContext from "../context/NotesCotext";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

const NotesCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  const navigate = useNavigate();
  const notesCtx = useContext(NotesContext)

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={handleDelete}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent
          onClick={() => {
            localStorage.setItem('note',JSON.stringify({"title":note.title,"detail":note.detail,"category":note.category,"id":note.id}))
            notesCtx.setTitleEdit(note.title)
            notesCtx.setDetailEdit(note.detail)
            notesCtx.setCategoryEdit(note.category)
            navigate(`/note/${note.id}`);
          }}
        >
          <Typography variant="body2" color="textSecondary">
            {note.detail}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotesCard;
