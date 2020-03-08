import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'

const Method2 = () => {
  const { gravatar } = useStaticQuery(query)

  return <GatsbyImage fluid={gravatar.localImage.childImageSharp.fluid} />
}

export default Method2

const query = graphql`
  query Method2 {
    gravatar(email: { eq: "email@example.com" }) {
      url
      localImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
