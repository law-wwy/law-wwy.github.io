module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    // Your Name
    name: 'Yrral-Ben M. Rosales',
    // Main Site Title
    title: `Yrral-Ben M. Rosales | Software Engineer | Web Developer`,
    // Description that goes under your name in main bio
    description: `Developer, Problem Solver, Curious, Lifelong learner`,
    // Optional: Twitter account handle
    author: `@lawwy`,
    // Optional: Github account URL
    github: `https://github.com/law-wwy`,
    // Content of the About Me section
    about: `Aspiring Web developer with a strong foundation in front-end and back-end technologies. Enthusiastic about creating responsive, user-friendly, and innovtive web applications.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Robotilapia',
        description:
          'A fish monitoring system focused on tilapia fishes that has feeding mechanism',
        link: 'https://github.com/law-wwy/priv-inv-sym',
        image: '/images/robofish.png'
      },
      {
        name: 'Kudo Gym App',
        description:
          'A system to manage gym memberships, track attendance, and organize trainer schedules efficiently',
        link: 'https://github.com/law-wwy/Bagaporo',
        image: '/images/gym.png'
      },

    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'AmaCENG Corp',
        description: 'Network Engineer, December 2023 - Present',
        link: 'https://github.com/law-wwy/devfolio',
      },
      {
        name: 'Dagok Corp',
        description: 'Back-end Developer, May 2020 - November 2023',
        link: 'https://github.com/law-wwy/devfolio',
      },
      {
        name: 'Humunguos',
        description: 'Front-end Developer, February 2018- December 2019',
        link: 'https://github.com/law-wwy/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript , C++, C, Node.js, Express.js, React.js, PHP',
      },
      {
        name: 'Databases',
        description: 'MongoDB,  MySQL',
      },
      {
        name: 'Soft Skills',
        description:
          'Team Player, Active Listen, Attitude & Work Ethic, Empathy',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
