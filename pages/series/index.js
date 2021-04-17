import axios from "../../axios";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";

import "swiper/swiper-bundle.min.css";

const Series = ({ data }) => {
  const { results } = data;
  return (
    <Layout>
      <Carousel data={results} tv />
    </Layout>
  );
};

export default Series;

export const getServerSideProps = async () => {
  const response = await axios.get("/trending/tv/day");

  return {
    props: { data: response.data },
  };
};
