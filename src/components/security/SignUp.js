import React from 'react';
import {Avatar, Button, Card, Container, Grid, Icon, Link, TextField, Typography} from "@material-ui/core";
import useStyles from "../../theme/useStyles";

const SignUp = () => {
    const classes = useStyles();

    return (
            <Container className={classes.container}>
                    <Grid container justifyContent="center">
                        <Grid item lg={6} md={8}>
                           <Card className={classes.card} align="center">
                               <Avatar className={classes.avatar}>
                                   <Icon className={classes.icon}>
                                       person_add
                                   </Icon>



                               </Avatar>
                               <Typography variant="h5" color="primary">
                                   Sign Up
                               </Typography>

                                   <form className={classes.form}>
                                       <Grid container spacing={2} >
                                              <Grid item xs={12} md={6} className={classes.gridmb}>
                                                    <TextField
                                                        label="Name"
                                                        name="name"
                                                        variant="outlined"
                                                        fullWidth
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} md={6} className={classes.gridmb} spacing={2}>
                                                    <TextField
                                                        label="Last Name"
                                                        name="lastName"
                                                        variant="outlined"
                                                        fullWidth
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} md={6} className={classes.gridmb}>
                                                    <TextField
                                                        label="Email"
                                                        name="email"
                                                        variant="outlined"
                                                        fullWidth
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} md={6} className={classes.gridmb}>
                                                    <TextField
                                                        label="Password"
                                                        name="password"
                                                        variant="outlined"
                                                        fullWidth
                                                        required
                                                    />
                                                </Grid>

                                                <Grid item xs={12} md={12} className={classes.gridmb}>
                                                    <TextField
                                                        label="Confirm Password"
                                                        name="confirmPassword"
                                                        variant="outlined"
                                                        fullWidth
                                                        required
                                                    />
                                                </Grid>

                                       </Grid>
                                       <Grid item xs={12} md={6} className={classes.gridmb}>
                                           <Button
                                               variant="contained"
                                               fullWidth
                                               color = "primary"
                                           > Sign Up</Button>
                                       </Grid>

                                       <Link
                                       href="/"
                                        variant="body1"
                                       className={classes.link}
                                       >

Already have an account? Sign In
                                       </Link>

                                   </form>

                           </Card>
                        </Grid>

                    </Grid>

                </Container>
            );
};

export default SignUp;
