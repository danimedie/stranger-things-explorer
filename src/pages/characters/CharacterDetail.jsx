import { useCharacter } from "../../hooks/useCharacters"

export default function CharacterDetail() {
  const { character } = useCharacter()

  return (
    <>
      {character && (
        <h1>{character.name}</h1>
      )}
    </>
  )
}