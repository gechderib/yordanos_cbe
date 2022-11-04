import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import React, { useContext } from "react";
import CbeContext from "../context/CbeContext";

const useStyles = makeStyles(() => {
  return {
    field: {
      margin: 20,
    },
    category: {
      display: "flex",
      flexDirection: "row",
    },
    control: {
      width: "100%",
    },
    btn:{
        marginTop:16,
        height:50,
        width:"100%",
    }
  };
});

const ApplayForAtm = () => {
  const cbeCtx = useContext(CbeContext);
  const classes = useStyles();
  return (
    <div>
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormControl className={classes.control}>
          <FormLabel>A/C No</FormLabel>
          <div className={classes.category}>
            <TextField
              className={classes.field}
              id="acNo1"
              color="primary"
              label="Account No 1"
              variant="outlined"
              required
              fullWidth
              value={cbeCtx.account1}
              onChange={(e) => {
                cbeCtx.setAccount1(e.target.value)
              }}
            />
            <TextField
              className={classes.field}
              id="acNo2"
              color="primary"
              label="Account No 2"
              variant="outlined"
              fullWidth
              value={cbeCtx.account2}
              onChange={(e) => {cbeCtx.setAccount2(e.target.value)}}
            />
            <TextField
              className={classes.field}
              id="acNo3"
              color="primary"
              label="Account No 3"
              variant="outlined"
              fullWidth
              value={cbeCtx.account3}
              onChange={(e) => {cbeCtx.setAccount3(e.target.value)}}
            />
          </div>
        </FormControl>

        <FormControl className={classes.control}>
          <FormLabel>Basic Info</FormLabel>
          <div className={classes.category}>
            <TextField
              className={classes.field}
              id="fullname"
              color="primary"
              label="Full Name"
              variant="outlined"
              required
              fullWidth
              value={cbeCtx.fullName}
              onChange={(e) => {cbeCtx.setFullName(e.target.value)}}
            />
            <TextField
              className={classes.field}
              id="ocupation"
              color="primary"
              label="Ocupation"
              variant="outlined"
              required
              fullWidth
              value={cbeCtx.occupation}
              onChange={(e) => {cbeCtx.setOccupation(e.target.value)}}
            />
            <TextField
              className={classes.field}
              id="nationality"
              color="primary"
              label="Nationality"
              variant="outlined"
              required
              fullWidth
              value={cbeCtx.nationality}
              onChange={(e) => {cbeCtx.setNationality(e.target.vlaue)}}
            />
          </div>
        </FormControl>

        <hr />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl>
              <FormLabel>Address(01)</FormLabel>
              <TextField
                className={classes.field}
                id="wereda(01)"
                color="primary"
                label="Wereda(01)"
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="kebele"
                color="primary"
                label="Kebele(01)"
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="houseNo"
                color="primary"
                label="House No(01)"
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
              <TextField
                className={classes.field}
                id="town"
                color="primary"
                label="Town(01)"
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="pobox"
                color="primary"
                label="P.O.Box(01)"
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
              <TextField
                className={classes.field}
                id="tel"
                color="primary"
                label="Tel(01)"
                type={"tel"}
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormControl>
              <FormLabel>Address(02)</FormLabel>
              <TextField
                className={classes.field}
                id="wereda(02)"
                color="primary"
                label="Wereda(01)"
                variant="outlined"
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="kebele"
                color="primary"
                label="Kebele(02)"
                variant="outlined"
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="houseNo"
                color="primary"
                label="House No(02)"
                variant="outlined"
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
              <TextField
                className={classes.field}
                id="town"
                color="primary"
                label="Town(02)"
                variant="outlined"
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="pobox"
                color="primary"
                label="P.O.Box(02)"
                variant="outlined"
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
              <TextField
                className={classes.field}
                id="tel"
                color="primary"
                label="Tel(02)"
                type={"tel"}
                variant="outlined"
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormControl>
              <FormLabel>Identification</FormLabel>
              <TextField
                className={classes.field}
                id="idNo"
                color="primary"
                label="Id or Passport No."
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="rpNo"
                color="primary"
                label="Resident Permit No."
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />{" "}
              <TextField
                className={classes.field}
                id="placeIssued"
                color="primary"
                label="Place Issued"
                variant="outlined"
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
              <TextField
                className={classes.field}
                id="date"
                color="primary"
                label="Date"
                variant="outlined"
                type={"date"}
                required
                fullWidth
                value={""}
                onChange={(e) => {}}
              />
              {!cbeCtx.isUser && (
                <TextField
                  className={classes.field}
                  id="openedBy"
                  color="primary"
                  label="Opend By"
                  variant="outlined"
                  required
                  fullWidth
                  value={""}
                  onChange={(e) => {}}
                />
              )}
              {!cbeCtx.isUser && (
                <TextField
                  className={classes.field}
                  id="aprovedBy"
                  color="primary"
                  label="Approved By"
                  variant="outlined"
                  required
                  fullWidth
                  value={""}
                  onChange={(e) => {}}
                />
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Button
            className={classes.btn}
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
          endIcon={<KeyboardArrowRight />}
        >
          Submit ATM Application
        </Button>
      </form>
    </div>
  );
};

export default ApplayForAtm;
