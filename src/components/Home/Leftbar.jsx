import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  Spacio: {
    paddingTop: theme.spacing(7),
  },
}));

export default function Leftbar() {
  const classes = useStyles();

  return (
    <div className={classes.Spacio}>
      <List>
        {/* primer comentario  */}
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png" />
          </ListItemAvatar>
          <ListItemText
            primary="Ya fueron a Panda?"
            secondary={
              <React.Fragment>
                <Typography
                  alignContent="center"
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Recomendacion!
                </Typography>
                {
                  " — Fui con unos amigos y si bien todo esta super , la musica no fue de mi agrado (mucho reggaton)…"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        {/* segundo Comentario */}
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://i.pinimg.com/originals/10/b9/06/10b9066ea3ae2d07e4e420be65349565.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Noche Semaforo!!"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Para: patricio, luis lopez y el emma..
                </Typography>
                {
                  " — Chicos para este sabado hay un gran evento en Ovni!! no se lo pierdan…"
                }
              </React.Fragment>
            }
          />
        </ListItem>
        {/* tercer comentario */}
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOp69MbwpYt79LspYcPBOLm6bPXUmceW0Btw&usqp=CAU" />
          </ListItemAvatar>
          <ListItemText
            primary="Buenos Shows"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                {" — tienen que ir a Motel!…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
}
