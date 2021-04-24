
export const indexArray = [1, 4, 7]

export const baseURLs =
    ['https://pokeapi.co/api/v2/pokemon/7/',
        'https://pokeapi.co/api/v2/pokemon/4/',
        'https://pokeapi.co/api/v2/pokemon/1/',
        `https://pokeapi.co/api/v2/pokemon/${indexArray[Math.floor(Math.random() * 2)]}/`
    ]