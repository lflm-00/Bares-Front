import {
  alpha,
  AppBar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState, useEffect } from "react";
import userService from "../../services/user";

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

export default function Navbar() {
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
    </AppBar>
  );
}
