/* eslint-disable no-undef */
import {
  alpha,
  AppBar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Cancel,
  EmojiEvents,
  EventAvailable,
  Mail,
  Map,
  Notifications,
  Person,
  Search,
  Settings,
} from "@material-ui/icons";
import { useState, useEffect } from "react";
import userService from "../../services/user";
import { Box } from "@mui/system";
import { Divider, List, ListItem, SwipeableDrawer } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },

  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  Badge: {
    marginRight: theme.spacing(2),
  },
  icons: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
}));
//
export default function Navbar() {
  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState([
    JSON.parse(window.localStorage.getItem("loggedAppUser")) || null,
  ]);
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      setUser(user);
      const token = user.token;

      userService.getUser(token).then((initialUser) => {
        setUser(initialUser);
      });
      // noteService.setToken(user.token);
    }
  }, []);

  const classes = useStyles({ open });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <IconButton
          onClick={() => setOpen1(true)}
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        {/*  boton hamburgesa */}
        <SwipeableDrawer
          anchor="left"
          open={open1}
          onClose={() => setOpen1(false)}
          onOpen={() => {}}
        >
          <div>
            <Box textAlign="center" p={2}>
              Bienvenido (usuario)
            </Box>
            <Divider />
            <List>
              <div className={classes.item}>
                <ListItem button onClick={() => router.push("/Mi Perfil")}>
                  <Person color="primary" className={classes.icon} />
                  <ListItemText primary={"Mi Perfil"} />
                </ListItem>
              </div>

              <div className={classes.item}>
                <ListItem button onClick={() => router.push("/Ubicaciones")}>
                  <Map color="primary" className={classes.icon} />
                  <ListItemText primary={"Ubicaciones"} />
                </ListItem>
              </div>

              <div className={classes.item}>
                <ListItem button onClick={() => router.push("/Eventos")}>
                  <EventAvailable color="primary" className={classes.icon} />
                  <ListItemText primary={"Eventos"} />
                </ListItem>
              </div>
              <div className={classes.item}>
                <ListItem
                  button
                  onClick={() => router.push("/Mejores Calificados")}
                >
                  <EmojiEvents color="primary" className={classes.icon} />
                  <ListItemText primary={"Mejores Calificados"} />
                </ListItem>
              </div>
              <div className={classes.item}>
                <ListItem button onClick={() => router.push("/Configuracion")}>
                  <Settings color="primary" className={classes.icon} />
                  <ListItemText primary={"Configuracion"} />
                </ListItem>
              </div>
              <div className={classes.item}>
                <ListItem button onClick={() => router.push("/Cerrar Sesion")}>
                  <Cancel color="primary" className={classes.icon} />
                  <ListItemText primary={"Cerrar Sesion"} />
                </ListItem>
              </div>
            </List>
          </div>
        </SwipeableDrawer>
        {/* eeeeeeeeeeeeeeeeeeeeeee */}

        <Typography variant="h6" className={classes.logoLg}>
          Barme {console.log([user])}
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          {user.username}
        </Typography>

        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search.." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={1} color="secondary" className={classes.Badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.Badge}>
            <Notifications />
          </Badge>
        </div>
      </Toolbar>
      <Drawer anchor="left" open1={open1} onClose={() => setOpen1(false)}>
        <h3>a l verdaga</h3>
      </Drawer>
    </AppBar>
  );
}
