import { Link } from 'react-router-dom'
import Logo from '../../assets/st-logo.png'

export function Header() {
  return (
    <header className='flex justify-between px-5 items-center bg-upsidedown'>

      <Link to='/'>
        <img
          src={ Logo }
          alt="Logo de la serie de televisión llamada Stranger Things"
          className='w-30 my-5'
        />
      </Link>

      <nav>
        <ul className='flex'>
          <li>
            <Link to='/characters' className='flex p-5 text-accent font-bold hover:text-glow transition-all text-xl'>
              Characters
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}