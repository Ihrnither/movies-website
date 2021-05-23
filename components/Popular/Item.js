import { useState } from "react";
import { Grid, Grow, Container, Typography } from "@material-ui/core";
import Link from "next/link";

import classes from "./Popular.module.css";

const Item = ({ title, releaseDate, image, id, tv }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Grid item xs={6} sm={4} lg={3} key={id}>
        <div
          className={classes.imageContainer}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Grow in={show}>
            <Container>
              <Grid
                container
                direction="column"
                className={classes.movieInfo}
                spacing={1}
              >
                <Grid item>
                  <Typography>
                    <strong>
                      {title} ({releaseDate.split("-")[0]})
                    </strong>
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href={`/${tv ? `series/${id}` : `movies/${id}`}`}>
                    <a className={classes.navlink}>
                      <Typography variant="body2">See More</Typography>
                    </a>
                  </Link>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </div>
      </Grid>
    </>
  );
};

export default Item;
