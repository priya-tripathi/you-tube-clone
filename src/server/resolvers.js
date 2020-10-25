const resolvers = {
  Query: {
    videosInDb: async (parent, args, { dataSources }) =>
      dataSources.api.showVideos(),
  },
  Mutation: {
    uploadVideo: async (parent, args, { dataSources }) =>
      dataSources.api.saveVideo(args),
  },
};

module.exports = resolvers;
