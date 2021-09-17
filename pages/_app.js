import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ga_code } from "../helpers/consts";

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag("config", ga_code, {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
