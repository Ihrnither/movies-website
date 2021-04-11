import Dashboard from "../../components/Dashboard";
import axios from "../../axios";

const Movie = ({ data, credits }) => {
  return (
    <>
      <Dashboard data={data} cast={credits.cast} crew={credits.crew} />
    </>
  );
};

export default Movie;

export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(`movie/${params.movieId}`);

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  const creditsResponse = await axios.get(`/movie/${response.data.id}/credits`);
  return {
    props: {
      data: response.data,
      credits: creditsResponse.data,
    },
  };
};
