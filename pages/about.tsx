import Head from "next/head";
import Card from "../components/Containers/Card";
import Page from "../components/Containers/Page";

export default function About() {
  return (
    <>
      <Head>
        <title>GGORG - About me</title>
      </Head>
      <Page pfp={false} title="About me">
        <div className="grid grid-rows-5 md:grid-rows-3 grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
          <Card title="Name">Grzegorz</Card>

          <Card title="Age">{new Date().getFullYear() - 2009} yo</Card>

          <Card title="Location">Wrocław, Poland</Card>

          <Card title="Languages">
            <ul className="list-disc">
              <li>Polish</li>
              <li>English</li>
            </ul>
          </Card>

          <Card title="Pronouns">he/him</Card>

          <Card title="OS">Arch BTW</Card>

          <Card title="Interest">
            Coding
            <br />
            <i>wat did u expect?</i>
          </Card>

          <Card title="The other langs">
            <ul className="list-disc">
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </Card>

          <Card title="Timezone">UTC+1</Card>
        </div>
      </Page>
    </>
  );
}
