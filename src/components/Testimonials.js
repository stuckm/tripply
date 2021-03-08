import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["test-1", "test-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <TestimonialContainer>
      <Description
        data-sal="slide-right"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        What People are Saying
      </Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Carla Stevens</h3>
            <p>
              This trip was the time of my life. I can't believe I waited this
              long to try Tripply! The whole trip was taken care of from start
              to finish with nothing to worry about. This is how I travel now!
            </p>
          </Testimonial>
          <Testimonial
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3ffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Kyle Johnson</h3>
            <p>
              Tripply gave me the nudge I needed to get out and explore. I have
              never been on a trip like this before. I was able to experience
              the culture and sites without having to plan or worry about a
              thing. I can't wait for my next trip!
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <div
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-duration="1200"
            >
              <Images key={key} fluid={image.node.childImageSharp.fluid} />
            </div>
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  )
}

export default Testimonials

const TestimonialContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1rem, 5vw, 2rem);
  font-weight: bold;
`
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  position: absolute;
`
