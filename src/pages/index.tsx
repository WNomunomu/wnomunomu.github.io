import Head from "next/head";
import { Layout } from "@/components/base/Layout";
import { Index } from "@/components/page/Index/Index";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>    
      </div>
      <Layout>
        <Index />
      </Layout>
    </>
  );
}
