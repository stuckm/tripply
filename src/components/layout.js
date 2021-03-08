import React, { useState, useEffect } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

import { Location } from "@reach/router"

const Layout = ({ children }) => {
  const [path, setPath] = useState("")
  const [trans, setTrans] = useState(false)
  useEffect(() => {
    path === "/" ? setTrans(true) : setTrans(false)
  }, [path])

  return (
    <>
      <GlobalStyle />
      <Header trans={trans} />
      <main>{children}</main>
      <Footer />
      <Location>{({ location }) => setPath(location.pathname)}</Location>
    </>
  )
}

export default Layout
