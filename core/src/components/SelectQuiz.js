import React from 'react'
import Header from "./framework/Header";
import Footer from "./framework/Footer"
import ApiConnect from "../api/ApiConnect";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(2, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
  }));

export const SelectQuiz = () => {

const classes = useStyles();

const API_URL = "http://127.0.0.1:8000/quiz/";
const [dataState] = ApiConnect(API_URL);

//console.log(dataState)

    return(
        <React.Fragment>
            <Header/>
                <Container maxWidth="md" component="main">
                    {/* Hero unit */}
                    <Container maxWidth="sm" component="main" className={classes.heroContent}>
                        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Quizzes
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" component="p">
                        World Best Quiz, for You and your Family
                        </Typography>
                    </Container>
                    {/* End hero unit */}
                    <Grid container spacing={5} alignItems="flex-end">
                        {dataState.data.map((q) => (
                            <Grid item key={q.title} xs={12} md={4}>
                                <Card>
                                    <CardHeader
                                    title={q.title}
                                    subheader={q.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    className={classes.cardHeader}
                                    />
                                    <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h6" color="textPrimary">
                                        Random Quiz
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                        /mo
                                        </Typography>
                                    </div>
                                    <ul>
                                        <Typography component="li" variant="subtitle1" align="center">
                                            50 Questions
                                            
                                        </Typography>
                                    </ul>
                                    </CardContent>
                                    <CardActions>
                                    <Button fullWidth variant="outlined" color="primary"
                                    href="http://localhost:3000/r/django">
                                        Start Quiz
                                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default SelectQuiz