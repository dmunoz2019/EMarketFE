import React from 'react';
import {Avatar, Button, Card, Container, Grid, Icon, Link, TextField, Typography} from "@material-ui/core";
import useStyles from "../../theme/useStyles";

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

                        <form className={classes.form}>
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
