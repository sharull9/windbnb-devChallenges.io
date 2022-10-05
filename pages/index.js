import Head from "next/head";
import Catalogue from "../Components/Catalogue";
import Header from "../Components/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Windbnb | devChallenges.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <div className="w-full mb-[20px]">
        <Header />
      </div>
      <div className="px-[20px]">
        <Catalogue />
      </div>
    </div>
  );
}
