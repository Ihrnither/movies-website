import { useState } from "react";
import { useRouter } from "next/router";
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

import Search from "./Search";
import classes from "./Header.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/series", label: "Series" },
];

const Links = () =>
  links.map((link) => (
    <Link href={link.href} key={link.href}>
      <a className={classes.navlink}>{link.label}</a>
    </Link>
  ));

const Header = ({ staticHeader, transparent }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  const searchButtonHandler = () => {
    setOpen(false);
    setSearch(true);
  };

  const logoClickHandler = () => {
    router.push("/");
  };

  return (
    <>
      <Backdrop open={search} className={classes.backdrop}>
        <Search onClick={() => setSearch(false)} />
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
      <AppBar
        position={`${staticHeader ? "relative" : "fixed"}`}
        style={{
          backgroundColor: `${transparent && "transparent"}`,
          boxShadow: `${transparent && "none"}`,
        }}
      >
        <Toolbar
          className={classes.header}
          style={{
            backgroundColor: `${transparent && "transparent"}`,
            boxShadow: `${transparent && "none"}`,
          }}
        >
          <Grid container alignItems="center" justify="space-between">
            <div className={classes.logo}>
              <Typography variant="h4" onClick={logoClickHandler}>
                M
              </Typography>
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
