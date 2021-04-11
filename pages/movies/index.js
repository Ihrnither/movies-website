import axios from "../../axios";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";

import "swiper/swiper-bundle.min.css";

const Movies = ({ data }) => {
  const { results } = data;
  return (
    <Layout>
      <Carousel data={results} />
    </Layout>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const response = await axios.get("/trending/movie/day");

  return {
    props: { data: response.data },
  };
};
