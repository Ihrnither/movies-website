import { Container, Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Item from "../PopularSection/Item";

const PopularPage = ({ data, tv, pageNumber }) => {
  const [page, setPage] = useState(Number(pageNumber));
  const router = useRouter();
  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    const url = `/${tv ? "series" : "movies"}/popular/${page}`;
    router.push(url);
  }, [page]);

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map((item) => (
          <Item
            title={item.original_title || item.original_name}
            releaseDate={
              (item.release_date ? item.release_date : "0000-00-00") ||
              item.first_air_date
            }
            image={item.backdrop_path || item.poster_path}
            id={item.id}
            key={item.id}
            tv={tv}
          />
        ))}
      </Grid>
      <Grid container justify="center" style={{ margin: "12px 0" }}>
        <Grid item>
          <Pagination
            onChange={handleChange}
            count={20}
            color="primary"
            page={page}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularPage;
