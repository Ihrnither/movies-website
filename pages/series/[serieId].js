import Dashboard from "../../components/Dashboard";
import axios from "../../axios";
import Head from "next/head";

const Serie = ({ data, credits }) => {
  return (
    <>
      <Head>
        <title>M-Box - {data.name}</title>
      </Head>
      <Dashboard data={data} cast={credits.cast} crew={credits.crew} tv />
    </>
  );
};

export default Serie;

export const getServerSideProps = async ({ params }) => {
  const response = await axios.get(`tv/${params.serieId}`);

  if (response.status !== 200) {
    return {
      notFound: true,
    };
  }

  const creditsResponse = await axios.get(`/tv/${response.data.id}/credits`);
  return {
    props: {
      data: response.data,
      credits: creditsResponse.data,
    },
  };
};
