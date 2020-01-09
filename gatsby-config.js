/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Hieu Nguyen | Magento Developer`,
    author: `Baran Cezayirli`,
    description: `I am Magento develop since 2012 with both experience with M1 and M2. I strive to build great Magento website with custom features from basic to advance and can take an initial idea, tackle it from multiple angles and take it from basic stuff to something big. With 7 years of experience in just Magento development industry, I help e-commerce agency and store owner from idea phase to become the real stuff. I take design or idea and making out solutions, implement internal processes that fit your organization i.e coding review or doing technical supporting another team member , providing great result with great work.`,
    siteUrl: `https://cv.hieunguyen.dev/`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baran Cezayirli | Technologist`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
