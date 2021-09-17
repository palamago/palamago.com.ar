import {letters} from "../helpers/consts"
import {useRouter} from 'next/router'

export default function Title() {
  const router = useRouter()

  const titleObject = letters.find(letter=> letter.link === router.pathname);

  return (
    <div className="">
      <h1 className="w-screen px-4 my-10 text-2xl sm:text-4xl md:text-6xl lg:text-8xl text-center uppercase">
        {titleObject.title.split('').map(letter =>
          titleObject.letter === letter.toUpperCase() ?
          <span className={'text-yellow-300'}>{letter}</span>
          :
          <span className={'text-white'}>{letter}</span>
        )}
      </h1>
    </div>
  )
}
