import { useRef } from "react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { ButtonGroup, IconButton, Typography } from "@material-ui/core";
import NextIcon from "@material-ui/icons/NavigateNext";
import BeforeIcon from "@material-ui/icons/NavigateBefore";
import { useRouter } from "next/router";

import classes from "./Carousel.module.css";

SwiperCore.use([Navigation, Autoplay]);

const Carousel = ({ data, tv }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const onSwiperHandler = (swiper) => {
    // Override prevEl & nextEl now that refs are defined
    swiper.params.navigation.prevEl = navigationPrevRef.current;
    swiper.params.navigation.nextEl = navigationNextRef.current;

    // Re-init navigation
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };

  const router = useRouter();

  return (
    <>
      <Swiper
        className={classes.swiper}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        loop
        centeredSlides
        loopAdditionalSlides={1}
        spaceBetween={"-28%"}
        onSwiper={onSwiperHandler}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {data.map((movie) => (
          <SwiperSlide className={classes.slide} key={movie.id}>
            <div
              className={classes.wrapper}
              style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${
                  movie.backdrop_path || movie.poster_path
                }")`,
              }}
            >
              <div className={classes.movieInfo}>
                <Typography variant="h4" gutterBottom>
                  {movie.original_title || movie.original_name}
                </Typography>
                <div className={classes.description}>
                  <Typography variant="caption">{movie.overview}</Typography>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={classes.navButtons}>
          <ButtonGroup>
            <IconButton ref={navigationPrevRef}>
              <BeforeIcon />
            </IconButton>
            <IconButton ref={navigationNextRef}>
              <NextIcon />
            </IconButton>
          </ButtonGroup>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
