import { useEffect, useState } from "react";
import { getAllCharacters } from "../services/characters"

export function useCharacters() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function loadCharacters() {
      const data = await getAllCharacters()
      setCharacters(data)
    }
    
    loadCharacters()
  }, [])

  return { characters: characters }
}