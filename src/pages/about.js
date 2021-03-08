import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Testimonials />
  </Layout>
)

export default About
