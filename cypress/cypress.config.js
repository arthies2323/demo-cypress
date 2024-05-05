module.exports = {
  projectId: 'qzgv4j',
  fixturesFolder: false,

  e2e: {
    setupNodeEvents(on, config) {},
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
};
