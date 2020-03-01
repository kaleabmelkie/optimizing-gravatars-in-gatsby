import React from 'react'

import '../styles/index.css'
import Method1 from '../components/method-1'
import Method2 from '../components/method-2'

const IndexPage = () => {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 640 }}>
      <h1>Optimizing Gravatars in Gatsby</h1>
      <hr />

      <br />
      <br />

      <div>
        <strong>Method 1: Remote, Static, Fast-ish</strong>
        <br />
        Manual and Remote <code>GatsbyImage</code> Source
        <br />
        <br />
        <Method1 />
      </div>

      <br />
      <br />
      <br />

      <div>
        <strong>Method 2: Local, Static, Really Fast</strong>
        <br />
        Using{' '}
        <a
          href="https://www.gatsbyjs.org/packages/gatsby-source-gravatar"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          gravatar-source-gatsby
        </a>{' '}
        with{' '}
        <a
          href="https://www.gatsbyjs.org/packages/gatsby-plugin-remote-images"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          gravatar-plugin-remote-images
        </a>
        <br />
        <br />
        <Method2 />
      </div>
    </div>
  )
}

export default IndexPage
