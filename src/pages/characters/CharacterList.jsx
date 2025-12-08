import { CharacterCard } from "../../components/ui/CharacterCard";
import { useCharacters } from "../../hooks/useCharacters";

export default function CharacterList() {
  const { characters } = useCharacters()

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