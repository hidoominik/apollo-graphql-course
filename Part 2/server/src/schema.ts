import gql from "graphql-tag";

export const typeDefs = gql`
  "This field is an entry point into the rest of schema, it is top level field that client can query for"
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }
  "A track is a group of modules that teaches about specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illustration to display in track card or track page detail"
    thumbnail: String
    "the track's approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
`;
