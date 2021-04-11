import { Avatar, Grid, Typography } from "@material-ui/core";
import classes from "./Dashboard.module.css";

const CastItem = ({ image, name, character, director }) => (
  <Grid item>
    <Grid
      container
      alignItems="center"
      justify="space-between"
      className={classes.castItem}
    >
      <Grid item>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <Avatar
              className={classes.avatar}
              alt={name}
              src={`https://image.tmdb.org/t/p/original/${image}`}
            />
          </Grid>
          <Grid item>
            <Typography color="textSecondary">{name}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Typography color="textSecondary">as...</Typography>
          </Grid>
          <Grid item>
            <Typography>{director ? "Director" : character}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
export default CastItem;
