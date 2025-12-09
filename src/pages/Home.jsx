import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-[60vh]">
      <section className="text-center p-8 space-y-3">
        <h1 className="font-bold text-5xl">Welcome to <span className="text-accent">HAWKINS</span></h1>
        <p>Explore the Stranger Things universe characters!</p>
        <Link to='/characters' className="border bg-accent font-bold p-2 rounded-xl border-upsidedown text-upsidedown cursor-pointer hover:text-accent hover:border-accent hover:bg-upsidedown transition">View Characters</Link>
      </section>
    </div>
  )
}