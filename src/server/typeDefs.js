const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Video {
    filename: String!
    path: String!
  }
  type Query {
    videosInDb: [Video]
  }
  type Mutation {
    uploadVideo(file: Upload!): Video
  }
`

module.exports = typeDefs

