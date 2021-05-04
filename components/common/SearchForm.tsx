import React, { useState } from 'react'
import { styled as muiStyled } from '@material-ui/core/styles'
import { Collapse, withTheme, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { DefaultTheme } from '../../theme/Theme'
import styled from 'styled-components'

const MySearchIcon = muiStyled(withTheme(SearchIcon))((props: DefaultTheme) => ({
  color: props.theme.app.title,
}))
const SearchItem = styled.input`
  border: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
  background: none;
  border-bottom: 1px solid black;
  color: ${(props: DefaultTheme) => props.theme.app.title};
`
const SearchFrame = styled.div`
  position: absolute;
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px 0px;
  z-index: 10001;
  margin-left: 20px;
`

const SearchForm = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false)

  const onKeyPress = (e: any) => {
    if (e.key == 'Enter') {
      const value = e.target.value
      location.href = '/?keyword=' + value
    }
  }
  return (
    <>
      <IconButton
        aria-label="search"
        color="inherit"
        onClick={() => setIsOpenSearch(!isOpenSearch)}
      >
        <MySearchIcon />
      </IconButton>
      <Collapse in={isOpenSearch} timeout="auto">
        <SearchFrame>
          <SearchItem placeholder="검색어를 입력해주세요." onKeyPress={onKeyPress} />
        </SearchFrame>
      </Collapse>
    </>
  )
}

export default SearchForm
