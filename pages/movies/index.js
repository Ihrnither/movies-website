import { AppBar, Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#151419",
  },
  logo: {
    textAlign: "center",
    width: 65,
    height: 100,
    backgroundColor: "#FAE807",
    color: "#292929",
  },
});

const Movies = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root} style={{ height: 100 }}>
        <Grid
          container
          justify="space-around"
          alignContent="center"
          style={{
            height: "100%",
          }}
        >
          <Grid
            container
            className={classes.logo}
            alignContent="center"
            justify="center"
          >
            <Typography variant="h4">M</Typography>
          </Grid>
          <Grid item>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/movies">Movies</Link>
            <Link href="/series">Series</Link>
            <Link href="/recently">Recently Added</Link>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Movies;
