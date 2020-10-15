const fetch = require('node-fetch')

exports.fetchCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(json => json.results)
}

exports.fetchCharacter = ({id}) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
}