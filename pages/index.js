import { Grid, Box } from "@material-ui/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid container direction="row" className="home-container">
        <Grid container item xs="11" justify="flex-start" alignContent="center">
          <Box className="textbox">
            <ul>
              <li>
                <Link href="/showcase">Showcase</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/showcase">Contact</Link>
              </li>
            </ul>
            <span className="name">
              <h1>Hello,</h1>
              <h1>my name is Tim Olsson</h1>
            </span>
          </Box>

          <Box className="role">
            <h1>Front-end Developer</h1>
          </Box>
        </Grid>
        <Grid item container xs="1" className="socials" direction="column">
          <Link href="mailto:hello@timolsson.com">Email</Link>
          <Link href="LinkedIn">LinkedIn</Link>
        </Grid>
      </Grid>
    </>
  );
}
