import Head from "next/head";
import Page from "../components/Containers/Page";

export default function Home() {
  return (
    <>
      <Head>
        <title>GGORG</title>
      </Head>
      <Page>
        <p className="flex text-xl md:text-2xl">
          A teenager who likes programming
        </p>
      </Page>
    </>
  );
}
