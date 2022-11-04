import {
  Button,
  Container,
  Grid,
  ImageListItem,
  ImageList,
  ImageListItemBar,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useContext } from "react";
import BankerLogin from "../components/BankerLogin";
import UserLogin from "../components/UserLogin";
import CbeContext from "../context/CbeContext";

const useStyles = makeStyles({
  bankImg: {
    // width: "100%",
    height: 400,
    backgroundColor: "yellow",
  },
});

const Login = () => {
  const cbeCtx = useContext(CbeContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          {/* <ImageList>
            <ImageListItem>
            <img width="100%" id="previewImage" alt="kjhkjhk" src="/images/IB.png"/>
            </ImageListItem>
          </ImageList> */}
          <div className={classes.bankImg}></div>
          {/* <Button
            onClick={cbeCtx.handleToggleUser}
            variant="contained"
            color="secondary"
            disableElevation
          >
            Login As {cbeCtx.isUser ? "Banker" : "Customer"}
          </Button> */}

          <div>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="primary"
              onClick={handleClick}
            >
              Login As
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  cbeCtx.userLogin();
                }}
              >
                Customer
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  cbeCtx.bankerLogin();
                }}
              >
                Banker
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  cbeCtx.adminLogin();
                }}
              >
                Manager
              </MenuItem>
            </Menu>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          {cbeCtx.isUser ? <UserLogin /> : <BankerLogin />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
