import Link from "../Link";
import {
  AppBar,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  container: {
    height: "60",
    background: "#151419",
    "& a": {
      color: "rgba(255, 255, 255, 0.35)",
      margin: "0 14px",
    },
  },
  logo: {
    backgroundColor: "#FAE807",
    height: 80,
    width: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "black",
  },
  input: {
    color: "white",
  },
});

const Header = (props) => {
  const classes = useStyles(props);

  return (
    <AppBar className={classes.container}>
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          M
        </Typography>
        <Grid container justify="center">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/movies">
            <a>Movies</a>
          </Link>
          <Link href="/series">
            <a>Series</a>
          </Link>
          <Link href="/recent">
            <a>Recently Added</a>
          </Link>
        </Grid>
        <IconButton
          style={{
            color: "white",
            backgroundColor: "#292A2C",
            borderRadius: 6,
            width: 44,
            height: 44,
          }}
        >
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
