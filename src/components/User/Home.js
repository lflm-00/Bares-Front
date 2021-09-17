import { Grid, makeStyles} from "@material-ui/core";
import Feed from "../Home/Feed";
import Leftbar from "../Home/Leftbar";
import Navbar from "../Home/Navbar";
import Rigthbar from "../Home/Rightbar";

const useStyles = makeStyles((theme)=>({
  rigth:{
    [theme.breakpoints.down("sm")] :{
      display: "none",
    },
  },


}));

 export default function Home (){

  const classes = useStyles();
  return (
  <div>
    <Navbar/> 
    <Grid container>
      <Grid item sm={2} xs={2}>
        <Leftbar/>
      </Grid>
      <Grid item sm={7} xs={10}>
        <Feed/>
      </Grid>
      <Grid item sm={3} className={classes.rigth}>
      <Rigthbar/>
      </Grid>
    </Grid>
  </div>
  );
};

