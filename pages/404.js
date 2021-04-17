import { Divider, Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";

const Custom404 = () => {
  return (
    <Layout>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          height: "89vh",
        }}
      >
        <Grid item>
          <Typography>Error</Typography>
        </Grid>
        <Divider
          orientation="vertical"
          style={{ background: "grey", height: 50, margin: 12 }}
        />
        <Grid item>
          <Typography>This page could not be found.</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Custom404;
