const STAGER_THINGS_ENDPOINT = 'https://stranger-things-api.fly.dev/api/v1/characters'

export const getAllCharacters = async () => {
  try {
    const res = await fetch(STAGER_THINGS_ENDPOINT)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getCharacterById = async (id) => {
  try {
    const res = await fetch(`${STAGER_THINGS_ENDPOINT}/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}