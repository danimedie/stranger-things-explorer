import { useCharacter } from "../../hooks/useCharacters"
import NotFound from "../NotFound"
import { Loading } from "../../components/ui/Loading"

export default function CharacterDetail() {
  const { character, loading } = useCharacter()

  if (loading) {
    return <Loading /> 
  }

  if (!character) {
    return <NotFound /> 
  }

  return (
    <div className="text-white p-10">
      <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
      <img 
        src={character.photo} 
        alt={character.name} 
        className="rounded-xl shadow-lg w-96"
      />
    </div>
  )
}