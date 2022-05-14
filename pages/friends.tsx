import Head from "next/head";
import Page from "../components/Containers/Page";
import User from "../components/Discord/User";

export default function Friends() {
  return (
    <>
      <Head>
        <title>GGORG - Friends</title>
      </Head>
      <Page pfp={false} title="Friends">
        <div className="grid grid-rows-3 md:grid-rows-2 grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          {
            process.env.NEXT_PUBLIC_FRIENDS.split(" ").map((value) => (
              <User userId={value} key={value} />
            ))
          }
        </div>
      </Page>
    </>
  );
}

