import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CbeContext from "../context/CbeContext";

const useStyles = makeStyles({
  fields: {
    marginBottom: 20,
    marginTop: 20,
    display: "block",
  },
  welcome: {
    marginBottom: 20,
    color: "#f2963a",
  },
  message:{
    color:"#bc15ef",
    
  }
});
const BankerLogin = () => {
  const classes = useStyles();
  const cbeCtx = useContext(CbeContext);
const navigate = useNavigate()
  return (
    <>
      <Typography variant="h2" className={classes.welcome}>
        Commercial Bank of Ethiopia
      </Typography>
      <Typography variant="h5" className={classes.welcome}>
        Login to {cbeCtx.isAdmin?"Admin":"Banker"}  Account
      </Typography>
      <Typography className={classes.message}>
        display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank display some message from the bank 
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          cbeCtx.handleLogin(navigate);
        }}
      >
        <TextField
          className={classes.fields}
          value={cbeCtx.bankerUsername}
          onChange={(e) => cbeCtx.setBankerUserName(e.target.value)}
          variant="outlined"
          type={"text"}
          placeholder={cbeCtx.isAdmin?"Admin Username":"Banker Username"}
          label={cbeCtx.isAdmin?"Admin Username":"Banker Username"}
          color="secondary"
          fullWidth
          error={cbeCtx.bankerUsernameError}
        />
        <TextField
          className={classes.fields}
          value={cbeCtx.bankerPassword}
          onChange={(e) => cbeCtx.setBankerPassword(e.target.value)}
          variant="outlined"
          type={"text"}
          placeholder="Password"
          label="Password"
          color="secondary"
          fullWidth
          error={cbeCtx.bankerPasswordError}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          disableElevation
          endIcon={<KeyboardArrowRight />}
        >
          Login
        </Button>
      </form>
    </>
  );
};

export default BankerLogin;
