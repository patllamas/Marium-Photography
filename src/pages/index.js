import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className='Hero'>
      <div className='HeroGroup'>
        <h1>Zerazal Photography</h1>
        <p>Speed and Aesthetics</p>
        <p>Unrivaled Photography and Graphics Design</p>
        <br />
        <Link to="/page-2/">Book Me</Link>
        <div className='Logos'>
          <img alt='logo' src={require('../images/logos/photoshop.png').default} width='50' />
          <img alt='logo' src={require('../images/logos/lightroom.png').default} width='50' />
          <img alt='logo' src={require('../images/logos/illustrator.png').default} width='50' />
          <img alt='logo' src={require('../images/logos/twitter.png').default} width='50' />
          <img alt='logo' src={require('../images/logos/discord.png').default} width='50' />
        </div>

        <svg width="100%" height="172" fill="none">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

              M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
          </path>
        </svg>
      </div>
      <br />
      <div className='Cards'>
        <h2>Previous Work</h2>
        <div className='CardGroup'>
          <Card title='Abstract' text='' image={require('../images/abstract.jpg').default} />
          <Card title='Portraits' text='' image={require('../images/portrait.jpg').default} />
          <Card title='Events' text='' image={require('../images/otherevents.jpg').default} />
          <Card title='Weddings' text='' image={require('../images/wedding.jpg').default} />
          <Card title='Animals' text='' image={require('../images/animal.jpg').default} />
          <Card title='Decor' text='' image={require('../images/decor.jpg').default} />
          <Card title='Sports' text='' image={require('../images/sports.jpg').default} />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
