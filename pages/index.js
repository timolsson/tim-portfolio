import { Grid, Box } from "@material-ui/core";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    height: "100vh",
  },
  textbox: {
    marginTop: "5%",
    marginLeft: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    "& ul": {
      marginLeft: "10%",
      paddingLeft: 0,
      fontSize: 32,
      listStyleType: "none",
      "& li": {
        marginBottom: "4rem",
        "& a": {
          fontWeight: "400",
          color: "#272341",
          textDecoration: "none",
        },
        "& a:hover": {
          fontWeight: "500",
          opacity: "50%",
          transition: "0.1s ease-in-out",
        },
      },
    },
  },

  name: {
    fontFamily: "Pacifico",
    fontSize: 96,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "& p": {
      margin: 0,
    },
  },
  socials: {
    backgroundColor: "#fafafa",
    "& a": {
      fontSize: 24,
      fontWeight: "300",
      textDecoration: "none",
      position: "relative",
      top: "10%",
      marginBottom: "20vh",
      transform: "rotate(-90deg)",
    },
    "& a:hover": {
      opacity: "50%",
    },
  },
  role: {
    fontFamily: "Pacifico",
    position: "absolute",
    bottom: "10%",
    width: "fit-content",
    fontSize: 36,
    marginLeft: "10%",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="row" className={classes.root} justify="center">
        <Grid container item xs="6" justify="flex-start">
          <Box className={classes.textbox}>
            <ul>
              <li>
                <Link href="/showcase">showcase</Link>
              </li>
              <li>
                <Link href="/skills">skills</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs="5">
          <Box className={classes.name}>
            <p>Hello.</p>
            <p>I'am Tim</p>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs="1"
          className={classes.socials}
          direction="column"
        >
          <Link href="mailto:hello@timolsson.com">Email</Link>
          <Link href="LinkedIn">LinkedIn</Link>
        </Grid>
        <Box className={classes.role}>
          <h1>Front-end Developer</h1>
        </Box>
      </Grid>
    </>
  );
}
