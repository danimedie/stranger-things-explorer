import { CharacterCard } from "../../components/ui/CharacterCard";
import { Loading } from "../../components/ui/Loading";
import { useCharacters } from "../../hooks/useCharacters";
import NotFound from "../NotFound";

export default function CharacterList() {
  const { characters, loading } = useCharacters()

  if (loading) {
    return <Loading /> 
  }

  if (!characters) {
    return <NotFound /> 
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-accent p-8 text-shadow-lg">Stranger Things Characters</h1>
      <ul className="grid grid-cols-5 gap-8 px-8">
        {characters?.map((character) => {
          return (
            <CharacterCard key={character._id} character={character}/>
          )
        })}
      </ul>
    </>
  )
}