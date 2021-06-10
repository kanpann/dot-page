import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Frame = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  font-family: 'sunspots';
  font-size: 3rem;
  user-select: none;
  &:hover {
    color: blue;
  }
  color: black;
  a:visited {
    color: black;
  }
  cursor: pointer;
`

const Logo = () => {
  return (
    <>
      <Frame>
        <Link href="/">
          <a>Gunlog</a>
        </Link>
      </Frame>
    </>
  )
}
export default Logo
