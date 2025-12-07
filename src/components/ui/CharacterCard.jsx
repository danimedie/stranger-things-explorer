import { Link } from "react-router-dom";

export function CharacterCard() {
  return (
    <li className="flex items-center justify-center w-fit">
      <Link className="group hover:scale-105 transition bg-upsidedown rounded-xl">
        <img
          src="https://vignette.wikia.nocookie.net/strangerthings8338/images/f/f1/Eleven_S03_portrait.png/revision/latest/scale-to-width-down/286?cb=20190722075442"
          alt="Eleven"
          className="w-70 h-100 object-cover rounded-t-xl brightness-80 group-hover:brightness-100 transition"
        />
        <p className="p-2 text-2xl font-bold flex items-center gap-2 group-hover:text-accent transition group-hover:text-glow"><span className="rounded-full w-2 h-2 block bg-green-500"></span>Eleven</p>
      </Link>
    </li>
  )
}