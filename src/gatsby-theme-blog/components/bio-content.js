import React from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <>
      Hola, soy <Styled.a href="http://example.com/">Billi Ramirez</Styled.a>
      {` `} y trabajo como Software Developer.
      <br />
      En este blog comparto conocimientos y experiencias que he venido
      aprendiendo en esta carrera
    </>
  )
}
