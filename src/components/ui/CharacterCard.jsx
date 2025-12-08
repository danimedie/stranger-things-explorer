import { Link } from "react-router-dom";

export function CharacterCard({ character }) {
  return (
    <li className="flex items-center justify-center w-fit">
      <Link to={`/characters/${character._id}`} className="group hover:scale-105 transition bg-upsidedown rounded-xl shadow-lg">
        <img
          src={character.photo ?? 'https://i.pinimg.com/736x/b8/b7/2d/b8b72db3252b451dc2b3e14ebe399dcf.jpg'}
          alt={character.name ?? 'Unknown'}
          className="w-72 h-96 object-cover rounded-t-xl brightness-80 group-hover:brightness-100 transition"
        />
        <p className="p-2 text-2xl font-bold flex items-center gap-2 group-hover:text-accent transition group-hover:text-glow"><span className={`rounded-full w-2 h-2 block ${character.status === 'Alive' ? 'bg-green-500' : 'bg-red-500'}`}></span>{character.name ?? 'Unknown'}</p>
      </Link>
    </li>
  )
}