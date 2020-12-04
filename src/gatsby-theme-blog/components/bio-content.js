import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hi, my name <Styled.a href="http://example.com/">Billi Ramirez</Styled.a>
      {` `} and I'm a Software Developer
      <br />
      I'm taking this space to share with you my knowledge and experiences I've
      learned through this path.
    </>
  )
}
