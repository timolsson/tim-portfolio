import { Grid, Box } from "@material-ui/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid container direction="row" className="home-container">
        <Grid container item xs="6" justify="flex-start">
          <Box className="textbox">
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
          <Box className="name">
            <p>Hello.</p>
            <p>I'am Tim</p>
          </Box>
        </Grid>
        <Grid item container xs="1" className="socials" direction="column">
          <Link href="mailto:hello@timolsson.com">Email</Link>
          <Link href="LinkedIn">LinkedIn</Link>
        </Grid>
        <Box className="role">
          <h1>Front-end Developer</h1>
        </Box>
      </Grid>
    </>
  );
}
