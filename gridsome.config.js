// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

const tailwindcss = require("tailwindcss");

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Aeries',
  titleTemplate: `%s - Aeries Software`,
  plugins: [
    // {
    //   use: 'gridsome-source-graphql',
    //   options: {
    //     url: 'http://cms.aeries.com/graphql',
    //     fieldName: 'wpgraphql',
    //     typeName: 'WPGraphQL',
    //   }
    // },
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
      }
    },
  ],
  templates: {
    // WPGraphQLOpenings: '/careers/:slug/:id',
    // WPGraphQLPosts: '/blog/:slug',
  },
  css: {
    loaderOptions: {
      stylus: {
        test: /\.styl$/,
        loader: 'stylus-loader'
      }
    }
  }
}
