import { Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { RiCloseLine } from "react-icons/ri"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = ({ trans }) => {
  const [open, setOpen] = useState(false)
  return (
    <Nav trans={trans}>
      {open ? (
        <MobileMenu>
          <div onClick={() => setOpen(!open)}>
            {open ? <Close /> : <Bars />}
          </div>
          <div style={{ marginTop: "100px" }}>
            {menuData.map((item, index) => (
              <MobileNavLink to={item.link} key={index}>
                {item.title}
              </MobileNavLink>
            ))}
          </div>
        </MobileMenu>
      ) : null}
      <NavLink to="/">Tripply</NavLink>
      <div onClick={() => setOpen(!open)}>{open ? <Close /> : <Bars />}</div>

      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/tripping">
          Book a Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ trans }) => (trans ? "transparent" : "black")};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const Close = styled(RiCloseLine)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 150px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-out;
    position: absolute;
    right: 0;
    top: 0;
    background-color: black;
    width: 100%;
    height: 100vh;
    z-index: 100;
    scroll-behavior: disabled;
  }
`

const MobileNavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem 0.5rem;
  height: 40%;
  font-size: 1.6rem;
  cursor: pointer;
`
