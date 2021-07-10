import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { CardActionArea } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getGenre } from "./genre";
import { Grid } from "@material-ui/core";
import classes from "./Home.module.css";
import { useRouter } from "next/router";

export default function ImgMediaCard({
  title,
  genres,
  rating,
  image,
  mediaType,
  id,
}) {
  const genreList = genres.map((g) => getGenre(g));
  const genreStr = `${genreList.splice(0, 3).map((g) => ` ${g}`)}`;
  const router = useRouter();

  const cardClickHandler = () => {
    const route = `/${mediaType}/${id}`;
    router.push(route);
  };

  return (
    <Card className={classes.cardContainer}>
      <CardActionArea onClick={cardClickHandler}>
        <CardMedia
          component="img"
          alt={title}
          image={`https://image.tmdb.org/t/p/w500/${image}`}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography gutterBottom style={{ color: "#E3B81E" }}>
          {genreStr}
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            <FavoriteIcon style={{ color: "darkred" }} />
          </Grid>
          <Grid item>
            <Typography>{rating}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
