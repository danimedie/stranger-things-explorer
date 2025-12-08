import { useEffect, useState } from "react";
import { getAllCharacters, getCharacterById } from "../services/characters"
import { useParams } from "react-router-dom";

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

export function useCharacter() {
  const id = useParams()
  const [character, setCharacter] = useState([])

  useEffect(() => {
    async function loadCharacter() {
      const data = await getCharacterById(id)
      setCharacter(data)
    }

    loadCharacter()
  }, [])

  return { character: character }
}