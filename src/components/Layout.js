import {
    AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { format } from "date-fns";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      backgroundColor: "#f4f4f4",
    },
    title:{
        padding:theme.spacing(2),
        
    },
    appbar:{
        width:`calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date: {
        flexGrow: 1
    },
    avatar: {
        marginLeft:theme.spacing(2)
    }
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "MY Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>

      {/* app bar */}
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar>
                <Typography className={classes.date}>
                    Today is the {format(new Date(),'do MMMM Y')}
                </Typography>
                <Typography >
                    Getachew
                </Typography>
                <Avatar src="" className={classes.avatar}/>
            </Toolbar>
        </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography className={classes.title} variant="h5">Getachew Notes</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              className={
                location.pathname === item.path ? classes.active : null
              }
              key={item.text}
              button
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText  primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}</div>
    </div>
  );
};

export default Layout;
