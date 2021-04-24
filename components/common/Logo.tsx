import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const CustomLogo = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 100px;
  cursor: pointer;
  font-family: 'sunspots';
  font-size: 6rem;
  text-align: center;
  padding: 50px 10px;
  color: ${(props) => props.theme.color.title};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`

const Logo = () => {
  return (
    <Link href="/">
      <CustomLogo>Gunlog</CustomLogo>
    </Link>
  )
}
export default Logo
