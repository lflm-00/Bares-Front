import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 230,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
  card: {
    marginBottom: theme.spacing(4),
  },
  Welcome: {
    textAlign: "center",
  },
  button: {
    marginBottom: theme.spacing(5),
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "center",
      position: "flex",
    },
  },
}));

const PostSlider = () => {
  const classes = useStyles();
  // publicidad 1
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://scontent.feoh1-1.fna.fbcdn.net/v/t1.6435-9/241241687_4449714055117971_3420349413761415550_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=a26aad&_nc_eui2=AeHEabUJzVJg33SSjDZwXBEWIjBSZjKwj4EiMFJmMrCPgQNZFVqWaPMWyqEpoEmcQd8&_nc_ohc=Fe5KfyPNqKcAX_eilXp&_nc_ht=scontent.feoh1-1.fna&oh=b3cb42ebbc27a76198d9a09ceb0ab94f&oe=619388F8"
          title="Panda"
        ></CardMedia>
        <CardContent>
          <Typography className={classes.Welcome} gutterBottom variant="h4">
            Bienvenidos a Panda
          </Typography>
          <Typography variant="Body2">
            Bienvenidos a Panda una de las mejores discotecas juveniles de
            Armenia Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Deleniti recusandae totam doloremque autem dicta. Veritatis dolor
            sit aliquid, tempora nihil ex reiciendis, pariatur totam excepturi
            nobis molestiae blanditiis est nulla!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button variant="contained" size="small" color="secondary">
          Fan Page
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Eventos
        </Button>
        <Button variant="contained" size="small" color="primary">
          Precios estanquillo
        </Button>
        <Button variant="contained" size="small" color="primary">
          Novedades
        </Button>
        <Button variant="contained" size="small" color="primary">
          Ubicacion
        </Button>
      </CardActions>
      {/* publicidad 2 */}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media-cdn.tripadvisor.com/media/photo-s/16/e6/13/07/mariajuana-ale-house.jpg"
          title="Maria Juana"
        ></CardMedia>
        <CardContent>
          <Typography className={classes.Welcome} gutterBottom variant="h4">
            Maria Juana
          </Typography>
          <Typography variant="Body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            illum consectetur cum assumenda ad iusto modi expedita recusandae
            itaque beatae.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button variant="contained" size="small" color="secondary">
          Fan Page
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Eventos
        </Button>
        <Button variant="contained" size="small" color="primary">
          Precios estanquillo
        </Button>
        <Button variant="contained" size="small" color="primary">
          Novedades
        </Button>
        <Button variant="contained" size="small" color="primary">
          Ubicacion
        </Button>
      </CardActions>
      {/* publicidad 3 */}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=" https://i.planetacolombia.com/images/2019/0620/1219448-santos-disco-bar-discoteca-gay-20190620210058173.jpg"
          title="Maria Juana"
        ></CardMedia>
        <CardContent>
          <Typography className={classes.Welcome} gutterBottom variant="h4">
            Santos DiscoBar
          </Typography>
          <Typography variant="Body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, eos
            non error at odit nihil nostrum harum distinctio dolores beatae,
            voluptas quia soluta ab facilis nesciunt vero iusto a ad incidunt ex
            itaque! Aut iste, repudiandae corrupti quos quis et voluptate omnis
            numquam architecto rem molestiae! Hic aperiam voluptate et..
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button variant="contained" size="small" color="secondary">
          Fan Page
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Eventos
        </Button>
        <Button variant="contained" size="small" color="primary">
          Precios estanquillo
        </Button>
        <Button variant="contained" size="small" color="primary">
          Novedades
        </Button>
        <Button variant="contained" size="small" color="primary">
          Ubicacion
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostSlider;
