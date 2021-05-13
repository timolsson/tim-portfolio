import { Grid, Box } from "@material-ui/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid container direction="row" className="testing">
        <Grid container item xs="11" justify="flex-start" alignItems="center">
          <Box>
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
          </Box>
        </Grid>
        <Grid item xs="1">
          <Link href="LinkedIn">LinkedIn</Link>
        </Grid>
      </Grid>
    </>
  );
}
