import axios from "../../axios";
import Carousel from "../../components/Carousel";
import Layout from "../../components/Layout";
import Popular from "../../components/Popular";

import "swiper/swiper-bundle.min.css";

const Series = ({ data, popular }) => {
  return (
    <Layout>
      <Carousel data={data.results} tv />
      <Popular data={popular.results} tv />
    </Layout>
  );
};

export default Series;

export const getServerSideProps = async () => {
  let response;
  let popularResponse;
  try {
    response = await axios.get("/trending/tv/day");
    popularResponse = await axios.get("/tv/popular");
  } catch (err) {
    console.log(err);
  }

  return {
    props: { data: response.data, popular: popularResponse.data },
  };
};
