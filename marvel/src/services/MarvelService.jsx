class MarvelService {
    API_BASE = 'https://gateway.marvel.com:443/v1/public/'
    API_KEY = 'apikey=d47a6e2390607a24ba962473cd4120df'

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }

    getAllCharacters = () => {
        return this.getResource(
            `${this.API_BASE}characters?limit=9&offset=210&${this.API_KEY}`
        )
    }

    getCharacter = (id) => {
        return this.getResource(
            `${this.API_BASE}characters/${id}?${this.API_KEY}`
        )
    }
}

export default MarvelService
