import axios from "../../axios";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import Popular from "../../components/Popular";

import "swiper/swiper-bundle.min.css";

const Movies = ({ data, popular }) => {
  return (
    <Layout>
      <Carousel data={data.results} />
      <Popular data={popular.results} />
    </Layout>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  let response;
  let popularResponse;
  try {
    response = await axios.get("/trending/movie/day");
    popularResponse = await axios.get("/movie/popular");
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data: response.data, popular: popularResponse.data },
  };
};
