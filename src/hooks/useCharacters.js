import { useEffect, useState } from "react";
import { getAllCharacters, getCharacterById } from "../services/characters"
import { useParams } from "react-router-dom";

export function useCharacters() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCharacters() {
      try {
        setLoading(true)
        const data = await getAllCharacters()
        setCharacters(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    
    loadCharacters()
  }, [])

  return { characters, loading }
}

export function useCharacter() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCharacter() {
      setLoading(true)
      
      if (!id) {
        setLoading(false)
        return
      }

      try {
        const data = await getCharacterById(id)
        setCharacter(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadCharacter()
  }, [id])

  return { character, loading }
}