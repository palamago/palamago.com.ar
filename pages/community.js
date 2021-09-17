import Head from 'next/head'
import Header from "../components/header"
import Title from "../components/title"

export default function Python() {

  return (
    <div id="community-page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Title />
      </main>

    </div>
  )
}