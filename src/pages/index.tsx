import Head from "next/head";
import { Index } from "@/components/page/Index/Index";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </Head>    
      </div>
      <Index />
    </>
  );
}
