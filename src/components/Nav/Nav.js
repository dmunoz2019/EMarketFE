import React from 'react';
import {AppBar, Button, Container, Icon, Link, Toolbar, Typography} from "@material-ui/core";
import useStyles from "../../theme/useStyles";

const Nav = () => {
   const  classes = useStyles();
    return (
        <AppBar positicon="static">
            <Container >
                <Toolbar>

                    <div>
                        <Link color="inherit" underline="none">
                            <Icon fontSize="large"> store</Icon>
                            <Typography variant="h5"> EMarket </Typography>
                        </Link>
                    </div>
                    <div>
                        <Button color="inherit">
                            <Link href="/" color="inherit" underline="none" variant="h6">
                                <Icon color="inherit">
                                    home
                                </Icon>
                                Home
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/login" color="inherit" underline="none" variant="h6">
                                <Icon color="inherit">
                                    person
                                </Icon>
                                Login
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link href="/signup" color="inherit" underline="none" variant="h6">
                                <Icon color="inherit">
                                    person_add
                                </Icon>
                                Sign Up
                            </Link>
                        </Button>
                    </div>


                </Toolbar>
            </Container>
            
        </AppBar>
    );
};

export default Nav;
