import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Trips } from "../components/Trips"

const Tripping = () => (
  <Layout>
    <SEO title="Tripping" />
    <Trips heading="Hand Picked Destinations" />
  </Layout>
)

export default Tripping
