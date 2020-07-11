import Head from 'next/head'
import {getAllItems} from '../hooks/connectDirectus';

export async function getStaticProps({preview = false}) {
  const result = await getAllItems("links");
  return {
    props: {links: result.data, preview},
  }
}

export default function Home({links, state, error, preview}) {

  return (
    <div className="container">
      <Head>
        <title>Pablo H. Paladino | Porfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Pablo H. Paladino's porfolio" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-18158765-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-18158765-1');
              `,
          }}
        />
      </Head>

      <main>
        <h1 className="title">
          Pablo H. Paladino
          <br/><small>@palamago</small>
        </h1>

        <p className="description">
          Making data nicer all over the internet.
        </p>

        <p className="description">
          <code>#dataVisualization</code> <code>#frontend</code> <code>#openData</code> <code>#openGov</code> <code>#ddj</code> <code>#NARDOZ</code>
        </p>

        <div className="grid">
          {links.map(link =>
            <a key={`link-${link.id}`} href={link.link} target="_blank" className="card" rel="noreferrer">
              <h3>{link.name} &rarr;</h3>
            </a>
          )}
        </div>
      </main>

      <footer>
        <a>
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />{' '}
          {' '}&{' '}
          <img src="/directus-flat.svg" alt="Directus Logo" className="logo" /> Directus
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
          margin: 0 5px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
          .card {
            width: 96%;
            margin: 2%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
