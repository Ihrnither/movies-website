import { Typography } from "@material-ui/core";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url("https://thedirect.s3.amazonaws.com/media/article_full/jlco.jpg")`,
          backgroundSize: "cover",
          marginTop: 80 + 24,
          display: "flex",
          justifyContent: "center",
          height: 385,
        }}
      >
        <Typography variant="h3">Zack Snyder's Justice League</Typography>
      </div>
    </>
  );
}
