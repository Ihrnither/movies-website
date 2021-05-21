import { useState } from "react";
import Link from "../Link";
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Hidden,
  Backdrop,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import classes from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/series", label: "Series" },
  { href: "/recent", label: "Recently Added" },
];

const Links = () =>
  links.map((link) => (
    <Link href={link.href} key={link.href}>
      <a className={classes.navlink}>{link.label}</a>
    </Link>
  ));

const Header = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const searchButtonHandler = () => {
    setOpen(false);
    setSearch(true);
  };

  return (
    <>
      <Backdrop
        open={search}
        className={classes.backdrop}
        onClick={() => setSearch(false)}
      >
        <Typography>HELLO</Typography>
      </Backdrop>

      <Backdrop open={open} className={classes.backdrop}>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
            <IconButton className={classes.icon} onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton className={classes.icon} onClick={searchButtonHandler}>
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
            className={classes.linksContainer}
          >
            <Links />
          </Grid>
        </Grid>
      </Backdrop>
      <AppBar>
        <Toolbar className={classes.header}>
          <Grid container alignItems="center" justify="space-between">
            <div className={classes.logo}>
              <Typography variant="h4">M</Typography>
            </div>
            <Hidden xsDown>
              <Grid item>
                <Links />
              </Grid>
              <IconButton
                className={classes.icon}
                onClick={searchButtonHandler}
              >
                <SearchIcon />
              </IconButton>
            </Hidden>
            <Hidden smUp>
              <IconButton
                className={classes.icon}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
