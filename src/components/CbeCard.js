import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutlineOutlined, FileCopyOutlined } from "@material-ui/icons";
import React, { useContext } from "react";
import CbeContext from "../context/CbeContext";

const useStyles = makeStyles(() => {
  return {
    avatar: {},
  };
});

const CbeCard = ({request , handleDelete}) => {

  const classes = useStyles();
  return (
    <Card>
      <CardHeader

        avatar={<Avatar className={classes.avatar}>G</Avatar>}
        title={request.fullName}
        subheader={request.accountNo1}
        action={
          <div>
              <IconButton onClick={() => {handleDelete()}}>
            <DeleteOutlineOutlined />
            
          </IconButton>
          <IconButton>
            <FileCopyOutlined/>
          </IconButton>
          </div>


        }
      />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Account 1: {request.accountNo1}</Typography>
            <Typography>Account 2: {request.accountNo2}</Typography>
            <Typography>Account 3: {request.accountNo3}</Typography>
            <Typography>Full Name: {request.fullName}</Typography>
            <Typography>Ocupation: {request.occupation}</Typography>
            <Typography>Nationality: {request.nationality}</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Wereda(01): {request.wereda}</Typography>
            <Typography>Kebele(01): {request.kebele}</Typography>
            <Typography>House No(01): {request.houseNo}</Typography>
            <Typography>Town(01): _{request.town}</Typography>
            <Typography>P.O.Box(01): {request.Pobox}</Typography>
            <Typography>Tel(01): {request.tel}</Typography>

            
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Id or Passport No:{request.idNo}</Typography>
            <Typography>Resident Permit No:{request.rpNo}</Typography>
            <Typography>Place Issued: {request.placedIssued}</Typography>
            <Typography>Date: {request.date}</Typography>
            <Typography>Status: Not seen/ pending / done</Typography>
            <Typography>Time to take ATM: after 20 days/ 7th September 2022</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CbeCard;
