import {
  AppBar,
  Avatar,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AddCircleOutlineOutlined,
  CompareOutlined,
  LocalDiningOutlined,
  SearchOutlined,
  SubjectOutlined,
} from "@material-ui/icons";
import { format } from "date-fns";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CbeContext from "../context/CbeContext";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    title: {
      padding: theme.spacing(2),
      color: "#f2963a",
    },
    date: {
      flexGrow: 1,
      color: "#f2963a",
    },
    avatar: {
      marginLeft: 15,
    },
    appBar: {
      width: "80%",
    },
    toolbar: theme.mixins.toolbar,
    drawer: {
      width: "20%",
    },
    drawerPaper: {
      width: "20%",
    },
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(5),
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
  };
});




const CbeLayout = ({ children }) => {
  const cbeCtx = useContext(CbeContext)

  const menuItem = [
    {
      text: cbeCtx.isUser? "Your Requests" :"ATM Requests",
      icon: <SubjectOutlined color="primary" />,
      path: "/atm_requests",
  
    },
    {
      text: cbeCtx.isUser?"Applay For ATM": "Create ATM",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/applay_atm",
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>1000255451182</Typography>
          <Avatar
            className={classes.avatar}
            src="/assets/images/IB.png"
          ></Avatar>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        variant="permanent"
      >
        <div>
          <Typography className={classes.title} variant="h5">
            CBE ATM APPLICATION
          </Typography>
        </div>
        <List>
          {menuItem.map((item) => (
            <ListItem className={location.pathname === item.path? classes.active :null}
            key={item.text}
            button
            onClick={() => navigate(item.path)}

            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default CbeLayout;
