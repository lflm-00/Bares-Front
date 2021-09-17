import { Container, makeStyles} from "@material-ui/core";
import PostSlider from "./PostSlider";

const useStyles = makeStyles((theme)=>({
    container:{
        paddingTop: theme.spacing(10),  
      },
}));

const Feed = () => {

  const classes = useStyles();
  return <Container className={classes.container}>
      <PostSlider/>
      
   

  </Container>;
};

export default Feed;