const services = require('./services')

const resolvers = {
  Query: {
    characters: () => services.fetchCharacters(),
    character: (parent, args) => services.fetchCharacter(args)
  }
}

module.exports = resolvers