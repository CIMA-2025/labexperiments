import Head from 'next/head'
import { Navbar, Sidebar, Content } from "../components/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>LabExperiments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <a href="/api/auth/login"><b>Login</b></a>
        <br />
        <a href="/api/shows"><b>Show</b></a>
      </Head >
      <Navbar />
      <Sidebar />
      <Content />
    </div >
  )
}
