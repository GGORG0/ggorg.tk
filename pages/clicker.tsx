import Head from "next/head";
import { useState } from "react";
import Page from "../components/Containers/Page";

export default function Clicker() {
  return (
    <>
      <Head>
        <title>GGORG - Clicker</title>
      </Head>
      <Page title="Clicker yes" pfp={false}>
        <ClickButton />
      </Page>
    </>
  );
}

function ClickButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      // className="bg-blue-500 hover:bg-blue-700 hover:scale-110 text-white font-bold py-2 px-4 my-2 rounded shadow-lg text-2xl"
      className="hover:scale-105 py-4 px-8 my-2 rounded shadow-lg text-2xl ripple-bg-blue-500"
      onClick={() => setCount(count + 1)}
    >
      {count === 0 ? "Click me" : count}
    </button>
  );
}
