import {letters} from "../helpers/consts"
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Header() {
  const router = useRouter()

  return (
    <div id="header" className="flex w-screen">
      {letters.map(item =>
        <Link key={item.link} href={router.pathname === item.link ? "/" : item.link}>
          <div className={`w-1/6 h-10 flex justify-center items-center bg-gray-400 cursor-pointer hover:bg-red-400 ${router.pathname === item.link ? "bg-green-400" : "bg-gray-400"}`}>
            <span>{item.letter}</span>
          </div>
        </Link>
        )}
    </div>
  )
}
