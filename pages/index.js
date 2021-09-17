import Head from 'next/head'
import Link from 'next/link'
import {letters} from "../helpers/consts"

export default function Home() {

  return (
    <div id="home-page">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-wrap flex-row w-screen h-screen">
        {letters.map(item =>
          <Link key={item.link} href={item.link}>
            <div className="w-1/2 md:w-1/4 h-1/4 md:h-1/2 flex justify-center items-center bg-gray-400 cursor-pointer hover:bg-red-400 text-white  hover:text-yellow-300 transition-colors duration-500 bg-right-top hover:bg-left-bottom" style={{backgroundImage: `url(/textures/${item.texture})`}}>
                <span className={`letter-${item.letter}-container font-bold font-red text-9xl`}>{item.letter}</span>
            </div>
          </Link>
        )}
      </main>

    </div>
  )
}
