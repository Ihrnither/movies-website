import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Card from "./Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs({
  nowPlayingData,
  topRatedData,
  onAirData,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        <Tabs
          centered
          indicatorColor="primary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="IN THEATERS" {...a11yProps(0)} />
          <Tab label="TOP RATED" {...a11yProps(1)} />
          <Tab label="TV SERIES ON AIR" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={4}>
          {nowPlayingData.map((movie, index) => {
            if (index < 6) {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    title={movie.original_title}
                    genres={movie.genre_ids}
                    rating={movie.vote_average}
                    image={movie.poster_path}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={4}>
          {topRatedData.map((movie, index) => {
            if (index < 6) {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    title={movie.original_title}
                    genres={movie.genre_ids}
                    rating={movie.vote_average}
                    image={movie.poster_path}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={4}>
          {onAirData.map((serie, index) => {
            if (index < 6) {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    title={serie.original_name}
                    genres={serie.genre_ids}
                    rating={serie.vote_average}
                    image={serie.poster_path}
                  />
                </Grid>
              );
            }
          })}
        </Grid>
      </TabPanel>
    </div>
  );
}
