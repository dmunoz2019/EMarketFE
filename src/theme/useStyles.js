import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        marginTop: 40
    },
    card: {
        padding: 35,

    },

    avatar: {
        backgroundColor: "#ff0000",
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
        marginBottom: 10,
        marginTop: 20
    },
    link: {
        textDecoration: "none",
        "&:hover": {
            textDecoration: "none"

        }
    }


});

export default useStyles;