import { Avatar, Grid, Typography } from "@material-ui/core";
import classes from "./Dashboard.module.css";

const CastItem = ({ image, name, character }) => (
  <Grid item xs={6} md={4} className={classes.castItem}>
    <Grid container alignItems="center" direction="column">
      <Avatar
        className={classes.avatar}
        alt={name}
        src={`https://image.tmdb.org/t/p/original/${image}`}
      />
      <Typography color="textSecondary">{name}</Typography>
      <Grid item>
        <Grid container spacing={1}>
          <Grid item>
            <Typography color="textSecondary">as...</Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom>{character}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
export default CastItem;
