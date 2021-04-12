import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const CustomLogo = styled.img`
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 100px;
  cursor: pointer;
`

export const Logo = () => {
  return (
    <Link href="/">
      <CustomLogo src="/images/logo.png" />
    </Link>
  )
}
