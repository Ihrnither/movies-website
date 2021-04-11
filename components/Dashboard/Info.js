import { Grid, Typography } from "@material-ui/core";

const Info = ({ label, value }) => (
  <Grid container justify="space-between" alignItems="center">
    <Grid item>
      <Typography display="inline" color="textSecondary">
        {label}
      </Typography>
    </Grid>
    <Grid item>
      <Typography display="inline">{value}</Typography>
    </Grid>
  </Grid>
);
export default Info;
