import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>Zerazal Photography</h1>
        <p>Speed and Aesthetics</p>
        <p>Unrivaled Photography and Graphics Design</p>
        <br />
        <Link to="/page-2/">Hire Me</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
