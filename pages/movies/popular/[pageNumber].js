import Layout from "../../../components/Layout";
import PopularPage from "../../../components/PopularPage";
import axios from "../../../axios";

const Popular = ({ data, pageNumber }) => {
  return (
    <Layout>
      <PopularPage data={data.results} pageNumber={pageNumber} />
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
