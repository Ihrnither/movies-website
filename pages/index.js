import axios from "../axios";
import HomePage from "../components/Home";

export default function Home({
  data,
  trailerData,
  nowPlayingData,
  topRatedData,
  onAirData,
}) {
  return (
    <>
      <HomePage
        data={data}
        trailerData={trailerData}
        nowPlayingData={nowPlayingData}
        topRatedData={topRatedData}
        onAirData={onAirData}
      />
    </>
  );
}

export const getServerSideProps = async () => {
  const index = 0;
  let response;
  let mediaType;
  let trailerResponse;
  let nowPlayingResponse;
  let topRatedResponse;
  let onAirResponse;
  try {
    response = await axios.get("/trending/all/week");
    mediaType = response.data.results[index].media_type;
    trailerResponse = await axios.get(
      `${mediaType}/${response.data.results[index].id}/videos`
    );
    nowPlayingResponse = await axios.get(`movie/now_playing`);
    topRatedResponse = await axios.get(`movie/top_rated?region=eg`);
    onAirResponse = await axios.get(`tv/on_the_air`);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data: response.data.results[index],
      trailerData: trailerResponse.data.results,
      nowPlayingData: nowPlayingResponse.data.results,
      topRatedData: topRatedResponse.data.results,
      onAirData: onAirResponse.data.results,
    },
  };
};
