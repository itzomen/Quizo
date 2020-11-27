import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    // appBar:{
    //    add appBar additional styling 
    // }
    toolBarTitle:{
        flexGrow: 1,
    }
}));

export default function Header(){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar
            position="static"
            color="default"
            elevation={0}
            className={classes.appBar}>

                <Toolbar>
                    <Typography
                      variant="h6"
                      color="inherit"
                      className={classes.toolBarTitle}>
                        Quizo
                    </Typography>
                </Toolbar>
            </AppBar>   
        </div>
    )
}