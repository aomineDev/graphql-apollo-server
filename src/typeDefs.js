const { gql } = require("apollo-server")

const typeDefs = gql`
  enum CharacterStatus {
    Alive
    Dead
    unknown
  }

  type Character {
    id: ID
    name: String
    image: String    
    status: CharacterStatus
    episode: [String]
  }

  type Query {
    characters: [Character]
    character(id: ID!): Character
  }
`

module.exports = typeDefs