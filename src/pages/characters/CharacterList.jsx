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
      <h1 className="text-3xl font-bold text-accent py-8 px-2 text-shadow-lg">Stranger Things Characters</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
        {characters?.map((character) => {
          return (
            <CharacterCard key={character._id} character={character}/>
          )
        })}
      </ul>
    </>
  )
}