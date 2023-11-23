import React from 'react';
import {Avatar, Button, Card, Container, Grid, Icon, Link, TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    container: {
        marginTop: 40
    },
    card: {
        padding: 35,

    },

    avatar: {
        backgroundColor: "darkblue",
        width: 60,
        height: 60,
        fontSize: 30

    },
    icon: {
        fontSize: 30,
        color: "white"
    },
    form: {
        marginTop: 20,
        marginBottom: 20
    },
    gridmb: {
        marginBottom: 20,
        marginTop: 20
    }

});
const Login = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Grid container justifyContent="center">

                <Grid item lg={5} md={6}>
                    <Card align="center" className={classes.card}>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}>person</Icon>
                        </Avatar>
                        <Typography variant="h5" color="primary">
                            Login
                        </Typography>

                        <form>
                            <Grid container spacing={2} className={classes.gridmb}>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        variant="outlined"
                                        type="email"
                                        fullWidth
                                        required
                                    />
                                </Grid>

                                <Grid item xs={12} className={classes.gridmb}>
                                    <TextField
                                        label="Password"
                                        name="password"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        required
                                    />
                                    <Grid item xs={12} className={classes.gridmb}>
                                        <Button type="submit"
                                                variant="contained"
                                                color="primary"
                                                fullWidth
                                        >Login</Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Link
                                href="/"
                                variant="body1"
                            >
                                Sign Up
                            </Link>
                        </form>
                    </Card>
                </Grid>


            </Grid>

        </Container>
    );
};

export default Login;
