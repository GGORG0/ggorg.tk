import Head from "next/head";
import Card from "../components/Containers/Card";
import Page from "../components/Containers/Page";

export default function About() {
  return (
    <>
      <Head>
        <title>GGORG - Projects</title>
      </Head>
      <Page pfp={false} title="Projects">
        <div className="grid grid-rows-5 md:grid-rows-3 grid-cols-1 md:grid-cols-3 gap-1 md:gap-2">
          <Card title="Cordless" href="//gh.ggorg.tk/cordless_bot">A multi-function Discord bot.</Card>

          <Card title="SharX" href="//sharx.host">A ShareX uploader.</Card>

          <Card title="Dotfiles" href="//gh.ggorg.tk/dotfiles">My config files for programs.</Card>

          <Card title="Website">This website, yeah.</Card>

          <Card title="Archix" href="//arch.ggorg.tk">An ArchLinux installer.</Card>
        </div>
      </Page>
    </>
  );
}
