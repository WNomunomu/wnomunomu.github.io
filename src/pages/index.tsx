import Head from "next/head";

import { Index } from "@/components/page/Index/Index";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Nomu's portfolio"}</title>
      </Head>
      <Index />
    </>
  );
}
