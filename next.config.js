module.exports = {
  images: {
    domains: ["image.tmdb.org"],
  },
  redirects: async () => [
    {
      source: "/movies/popular",
      destination: "/movies/popular/1",
      permanent: true,
    },
    {
      source: "/series/popular",
      destination: "/series/popular/1",
      permanent: true,
    },
  ],
};
