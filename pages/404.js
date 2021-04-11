import { Divider, Grid, Typography } from "@material-ui/core";
import Layout from "../components/Layout";

const Custom404 = () => {
  return (
    <Layout>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={4}
        style={{
          marginTop: "auto",
          border: "1px solid green",
          height: "100vh",
        }}
      >
        <Grid item>
          <Typography variant="h5">Error</Typography>
        </Grid>
        <Divider
          orientation="vertical"
          style={{ background: "grey", height: 50 }}
        />
        <Grid item>
          <Typography variant="h5">This page could not be found.</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Custom404;
