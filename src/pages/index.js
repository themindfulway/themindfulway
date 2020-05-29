import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Mindfulness is a way of life and the principles of mindfulness can be applied to each and every living moment.</p>
    <p>This website is dedicated to sharing knowledge, experiences and thoughts about living life <i>The Mindful Way</i></p>
    <p>Here's a short poem that summarises the mindful way of life:</p>
    <p>Living life, the mindful way<br />
       It is always now, as they say</p>
    <p>From moment to moment, each moment at a time<br />
       Life is its own meaning, it’s not like a dime</p>
    <p></p>
    <p>The bias in our minds, creates the confusion<br />
       Dropping this bias, is the ultimate solution</p>
    <p></p>
    <p>Act for the action, not the results that you seek<br />
       It’s the seeking in life, that makes the mind weak</p>
    <p></p>
    <p>Compassion, kindness and love are their own results<br />
       To understand this message, we don’t need cults</p>
    <p></p>
    <p>When we say I am this, it means we’re not that<br />
       After all we realise, beliefs are a bit like scat</p>
    <p></p>
    <p>It’s a story that we hold, very close to our heart<br />
       Until one day it’s researched, and defied by a chart</p>
    <p></p>
    <p>Presence in the present, requires no belief<br />
       Dropping all the notions, leaves a sigh of relief</p>
    <p></p>
    <p>What is it that is different, in us from the others<br />
       Striving for uniqueness, is the thought that really bothers</p>
    <p></p>
    <p>We’re all so unique, and yet we’re all the same<br />
       Different characters as it may seem, we’re all in the same game</p>
    <p></p>
    <p>It’s a skill to cherish life, in this moment as it is<br />
       It’s as simple as it sounds, you don’t need to be a whiz</p>
    <Link to="/contact/">Contact us</Link>
  </Layout>
)

export default IndexPage
