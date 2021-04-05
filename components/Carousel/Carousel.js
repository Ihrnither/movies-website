import React from "react";
import SwiperCore, { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import NextIcon from "@material-ui/icons/NavigateNext";
import BeforeIcon from "@material-ui/icons/NavigateBefore";

import classes from "./Carousel.module.css";
import { ButtonGroup, IconButton, Typography } from "@material-ui/core";

SwiperCore.use([Navigation]);

const movies = [
  {
    name: `Zack Snyder's Justice League`,
    description: `Thousands of years ago, Steppenwolf and his legions of Parademonss`,
    image: `https://fr.web.img2.acsta.net/newsv7/21/03/16/16/48/2805053.jpg`,
  },
  {
    name: `John Wick`,
    description: `Thousands of years ago, Steppenwolf and his legions of Parademons`,
    image: `https://i1.wp.com/www.heyuguys.com/images/2016/10/John-Wick-2.jpg?fit=1200%2C600&ssl=1`,
  },
  {
    name: `Marvel: End Game`,
    description: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruinsAfter the devastating events of Avengers: Infinity War (2018), the universe is in ruinsAfter the devastating events of Avengers: Infinity War (2018), the universe is in ruinsAfter the devastating events of Avengers: Infinity War (2018), the universe is in ruins`,
    image: `https://boldoutline.in/wp-content/uploads/2019/04/cover-avengers-endgame.jpg`,
  },
];

const Carousel = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div className={classes.swiperContainer}>
      <Swiper
        style={{ marginTop: 80 + 45 }}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        loop
        slidesPerView={1}
        centeredSlides
        loopAdditionalSlides={3}
        spaceBetween={-500}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        // breakpoints={{
        //   600: { spaceBetween: -100 },
        //   768: { spaceBetween: -130 },
        //   980: { spaceBetween: -160 },
        //   1200: { spaceBetween: -200 },
        //   1400: { spaceBetween: -250 },
        // }}
      >
        {movies.map((movie) => (
          <SwiperSlide className={classes.slide} key={movie.name}>
            <div
              className={classes.image}
              style={{ backgroundImage: `url("${movie.image}")` }}
            >
              <div className={classes.movieInfo}>
                <Typography variant="h4" gutterBottom>
                  {movie.name}
                </Typography>
                <Typography variant="caption" display="block" noWrap paragraph>
                  {movie.description}
                </Typography>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={classes.navButtons}>
          <ButtonGroup>
            <IconButton>
              <BeforeIcon ref={navigationPrevRef} />
            </IconButton>
            <IconButton>
              <NextIcon ref={navigationNextRef} />
            </IconButton>
          </ButtonGroup>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
