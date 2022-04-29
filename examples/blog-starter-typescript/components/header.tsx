import Link from 'next/link'
import { useAuthContext } from '../contexts/Auth'

const Header = () => {
  const { logout, token } = useAuthContext()

  return (
    <div className='flex justify-between align-center mb-20 mt-8'>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
      </h2>
      {!!token ? <button onClick={logout} className="float-right text-sm my-auto">Logout</button> : null}
    </div>
  )
}

export default Header
