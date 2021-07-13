import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Hire Me" />
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>About meh</h1>
        <p>I'm a Grandmaster Ana main</p>
        <h1>Work in progress</h1>
        <br />
        <Link to="/">Go back to the homepage</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
