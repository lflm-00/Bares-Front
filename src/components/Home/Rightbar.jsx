import { Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(10),  
        position:"sticky",
        top: 0,
    },
    link:{
        marginRight:theme.spacing(2),
        color:"blue",
        fontSize: 17,
    },
    tipo:{
        textAlign:"center",
        marginBlock: 7,
        
    }, 
    
}));

const Rigthbar = () => {

    const classes = useStyles();
    return <Container className={classes.container}>
    <Typography className={classes.tipo}>Imagenes destacadas</Typography>
        <ImageList rowHeight={150} style={{MarginBottom:20}} cols={2}   >            
            <ImageListItem >
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/e6/13/07/mariajuana-ale-house.jpg" alt="" loading="lazy" />             
            </ImageListItem>
            <ImageListItem >
                <img src="https://caracol.com.co/radio/imagenes/2021/06/04/armenia/1622807610_026142_1622808308_miniatura_normal.jpg" alt="" loading="lazy" />             
            </ImageListItem>
            <ImageListItem >
                <img src="https://img.freepik.com/foto-gratis/dj-mezcla-pistas-discotecas-fiestas-mejor-obra-dj-famosos-reproductores-cd-discotecas-fiesta-edm-ideas-fiestas_140555-103.jpg?size=626&ext=jpg" alt="" loading="lazy" />             
            </ImageListItem>
            <ImageListItem >
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d0/ec/b0/noche-en-the-city-pub.jpg?w=500&h=400&s=1" alt="" loading="lazy" />             
            </ImageListItem>  
            <ImageListItem >
                <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/44/65/31/party-ppl.jpg?w=500&h=400&s=1" alt="" loading="lazy" />             
            </ImageListItem>  
            <ImageListItem >
                <img src="https://lh3.googleusercontent.com/PBOyaRoy7FXsB5OVBbPZg7x93-I4xNA2-P5l2zbTa-2lEYsZcTMpHPACaFpSLrZGcND9wJhMOHKKCoti=w768-h768-n-o-v1" alt="" loading="lazy" />             
            </ImageListItem>              
        </ImageList>        
        <Typography className={classes.tipo}>
            Tendencias
        </Typography>
        <Link href="#" className={classes.link} variant="body2"   >
            #Amimir
        </Link >
        <Link href="#"className={classes.link} variant="body2"  >
            #ArmRumba
        </Link>
        <Link href="#"className={classes.link} variant="body2"  >
            #PaPepe
        </Link>
        <Divider flexItem style={{marginBottom:5}}/>
        <Link href="#"className={classes.link} variant="body2"  >
            #OvniLive
        </Link>
        <Link href="#"className={classes.link} variant="body2"  >
            #PaPepeRumba
        </Link>
        <Link href="#"className={classes.link} variant="body2"  >
            #YoVoy
        </Link>

        
    </Container>
    
};

export default Rigthbar;