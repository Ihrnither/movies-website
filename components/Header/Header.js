import Link from "../Link";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import classes from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/shows", label: "TV Shows" },
  { href: "/recent", label: "Recently Added" },
];

const Links = () =>
  links.map((link) => (
    <Link href={link.href} key={link.href}>
      <a className={classes.navlink}>{link.label}</a>
    </Link>
  ));

const Header = () => {
  return (
    <AppBar>
      <div className={classes.header}>
        <Toolbar>
          <div className={classes.logo}>
            <Typography variant="h4">M</Typography>
          </div>
          <Grid container justify="center">
            <Links />
          </Grid>
          <IconButton className={classes.searchIcon}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
