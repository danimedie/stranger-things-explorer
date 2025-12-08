const STAGER_THINGS_ENDPOINT = 'https://stranger-things-api.fly.dev/api/v1/characters'

export const getAllCharacters = async () => {
  const res = await fetch(STAGER_THINGS_ENDPOINT)
  const data = await res.json()
  return data
}

export const getCharacterById = async ({ id }) => {
  const res = await fetch(STAGER_THINGS_ENDPOINT + `/${id}`)
  const data = await res.json()
  return data
}