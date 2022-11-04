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
});
const UserLogin = () => {
  const classes = useStyles();
  const cbeCtx = useContext(CbeContext);
const navigate = useNavigate()
  return (
    <>
      <Typography variant="h2" className={classes.welcome}>
        Welcome to Commercial Bank of Ethiopia
      </Typography>
      <Typography variant="h5" className={classes.welcome}>
        ATM Card Application Form
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          cbeCtx.handleLogin(navigate);
        //   if(cbeCtx.accountNumber){
        //     navigate("/applay_atm")
        //   }
        }}
      >
        <TextField
          className={classes.fields}
          value={cbeCtx.accountNumber}
          onChange={(e) => cbeCtx.setAccountNumber(e.target.value)}
          variant="outlined"
          type={"text"}
          placeholder="A/C No."
          label="A/C No."
          color="secondary"
          fullWidth
          error={cbeCtx.accountNumberError}
        />
        <FormControl className={classes.fields}>
          <FormLabel>Account Type</FormLabel>
          <RadioGroup
            value={cbeCtx.accountType}
            onChange={(e) => cbeCtx.setAccountType(e.target.value)}
          >
            <FormControlLabel
              value={"personal"}
              control={<Radio />}
              label="Personal"
            />
            <FormControlLabel
              value={"corporate"}
              control={<Radio />}
              label="Corporate"
            />
          </RadioGroup>
        </FormControl>
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

export default UserLogin;
