import Link from 'next/link'
import React from 'react'
import styled, { DefaultTheme } from 'styled-components'

const Frame = styled.div`
  .right {
    border: 1px solid black;
    padding: 5px 20px;
    margin: 0 auto;
  }
  a {
    color: ${(props: DefaultTheme) => props.theme.app.title};
  }
  font-size: 1rem;
  margin: 20px 0px;
  text-align: center;
`

type PaginationProps = {
  isPrev: boolean
  isNext: boolean
  page: number
  menu?: string
  topMenu?: string
}
const Pagination = ({ isPrev, isNext, menu, topMenu, page }: PaginationProps) => {
  let query
  if (menu) {
    query = { menu: menu, topMenu: topMenu }
  }
  return <Frame>{isNext && <></>}</Frame>
}
export default Pagination
