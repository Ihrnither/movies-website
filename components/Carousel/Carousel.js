import { useRef, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { ButtonGroup, IconButton, Typography } from "@material-ui/core";
import NextIcon from "@material-ui/icons/NavigateNext";
import BeforeIcon from "@material-ui/icons/NavigateBefore";

import classes from "./Carousel.module.css";

SwiperCore.use([Navigation]);

const movies = [
  {
    name: `Zack Snyder's Justice League`,
    description: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga dolor corrupti laboriosam quisquam molestias? Animi perferendis magni eos nisi at. Maiores laudantium perferendis obcaecati in doloribus provident explicabo porro officiis.`,
    image: `https://fr.web.img2.acsta.net/newsv7/21/03/16/16/48/2805053.jpg`,
  },
  {
    name: `John Wick`,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quidem dicta et excepturi non praesentium quisquam, facilis laboriosam ut, magni, voluptates perferendis nostrum laborum beatae suscipit consequuntur animi doloribus maiores!`,
    image: `https://i1.wp.com/www.heyuguys.com/images/2016/10/John-Wick-2.jpg?fit=1200%2C600&ssl=1`,
  },
  {
    name: `Marvel: End Game`,
    description: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruinsAfter the devastating events of Avengers: Infinity War (2018), the universe is in ruinsAfter the devastating events of Avengers: Infinity War (2018), the universe is in ruinsAfter the devastating events of Avengers: Infinity War (2018), the universe is in ruins`,
    image: `https://boldoutline.in/wp-content/uploads/2019/04/cover-avengers-endgame.jpg`,
  },
];

const Carousel = () => {
  const [zoom, setZoom] = useState(false);
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

  return (
    <>
      <Swiper
        style={{ marginTop: 80 + 45 }}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        loop
        centeredSlides
        loopAdditionalSlides={1}
        spaceBetween={"-18%"}
        onSwiper={onSwiperHandler}
      >
        {movies.map((movie) => (
          <SwiperSlide className={classes.slide} key={movie.name}>
            <div
              className={classes.wrapper}
              style={{ backgroundImage: `url("${movie.image}")` }}
            >
              <div className={classes.movieInfo}>
                <Typography variant="h4" gutterBottom>
                  {movie.name}
                </Typography>
                <div className={classes.description}>
                  <Typography variant="caption">{movie.description}</Typography>
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
