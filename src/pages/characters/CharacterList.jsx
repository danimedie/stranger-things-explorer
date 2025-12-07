import { CharacterCard } from "../../components/ui/CharacterCard";

export default function CharacterList() {
  return (
    <>
      <h1>Character List</h1>
      <ul className="grid grid-cols-5 gap-8 p-8">
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
        <CharacterCard/>
      </ul>
    </>
  )
}