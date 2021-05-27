import Layout from "../../../components/Layout";
import axios from "../../../axios";

import PopularPage from "../../../components/PopularPage";

const Popular = ({ data, pageNumber }) => {
  return (
    <Layout>
      <PopularPage data={data.results} tv pageNumber={pageNumber} />
    </Layout>
  );
};

export default Popular;

export const getServerSideProps = async (ctx) => {
  let response;
  try {
    response = await axios.get(`/movie/popular?page=${ctx.params.pageNumber}`);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: response.data,
      pageNumber: ctx.params.pageNumber,
    },
  };
};
