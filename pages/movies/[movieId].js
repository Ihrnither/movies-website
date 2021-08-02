import Dashboard from "../../components/Dashboard";
import axios from "../../axios";
import Head from "next/head";

const Movie = ({ data, credits }) => {
  return (
    <>
      <Head>
        <title>M-Box - {data.title}</title>
      </Head>
      <Dashboard data={data} cast={credits.cast} crew={credits.crew} />
    </>
  );
};

export default Movie;

export const getServerSideProps = async ({ params }) => {
  let response;
  let creditsResponse;
  try {
    response = await axios.get(`movie/${params.movieId}`);
  } catch (err) {
    console.log(err);
  }

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  try {
    creditsResponse = await axios.get(`/movie/${response.data.id}/credits`);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: response.data,
      credits: creditsResponse.data,
    },
  };
};
