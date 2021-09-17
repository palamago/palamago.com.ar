import {letters} from "../helpers/consts"
import {useRouter} from 'next/router'

export default function Title() {
  const router = useRouter()

  const titleObject = letters.find(letter=> letter.link === router.pathname);

  return (
    <h1 id="title" className="w-screen px-4 my-10 text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center uppercase">
      {titleObject.title}
    </h1>
  )
}
