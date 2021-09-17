import { Container, makeStyles, Typography, } from "@material-ui/core";
import { Cancel, EmojiEvents, EventAvailable, Explore,  Map,  Person, Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme)=>({
    container:{
        height: "100vh",
        color:"white",        
        paddingTop: theme.spacing(10),  
        backgroundColor: theme.palette.primary.main,
        position:"sticky",
        top: 0,
        [theme.breakpoints.up("sm")] :{
            backgroundColor:"white",
            color:"#1565c0",
            boder:"1px solid #999",
        },
    },
    item:{
        display:"flex",
        alignItems:"center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")] :{
            marginBottom: theme.spacing(3),
            cursor:"pointer",
        },   
    },
    text:{
        fontWeight:500,
        [theme.breakpoints.down("sm")]: {
            display: "none",   
        },                
    },
    icon:{
        marginRigth: theme.spacing(1),
        [theme.breakpoints.up("sm")]:{
            fontSize:"40px",
        }
    },
    
}));

const Leftbar = () => {

  const classes = useStyles();
  return ( 
  <Container className={classes.container}>
        <div className={classes.item}>
            <Person className={classes.icon}/>
            <Typography classsName={classes.text}>Mi Perfil</Typography>            
        </div>
        <div className={classes.item}>
            <Explore className={classes.icon}/>
            <Typography classsName={classes.text}>Explorar</Typography>            
        </div>
        <div className={classes.item}>
            <Map className={classes.icon}/>
            <Typography classsName={classes.text}>Ubicaciones</Typography>            
        </div>
        <div className={classes.item}>
            <EventAvailable className={classes.icon}/>
            <Typography classsName={classes.text}>Eventos</Typography>            
        </div>
        <div className={classes.item}>
            <EmojiEvents className={classes.icon}/>
            <Typography classsName={classes.text}>Mejores calificados</Typography>            
        </div>
        <div className={classes.item}>
            <Settings className={classes.icon}/>
            <Typography classsName={classes.text}>Configuracion</Typography>            
        </div>
        <div className={classes.item}>
            <Cancel className={classes.icon}/>
            <Typography classsName={classes.text}>Cerrar Sesion</Typography>            
        </div>
    </Container>
    ); 
};

export default Leftbar;