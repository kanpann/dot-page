// 카테고리 정보를 밖에서 주입 받게 수정하면 이 컴포넌트를 재사용할 수 있을 것 같음. 나중에 고려해봄
import { Category } from '../site.config'
import styled from 'styled-components'
import Link from 'next/link'

const List = styled.ul`
  list-style: none;
`
const Item = styled.li``

export const HCategories = () => {
  return (
    <>
      {Object.keys(Category).map((categoryName) => {
        const mainMenu = Category[categoryName]

        const { isSub, url } = mainMenu

        let subMenus
        if (isSub) {
          subMenus = Category[categoryName]['sub']
        }
        return (
          <List>
            <Item>
              <Link href={url}>{categoryName}</Link>
              <List>{isSub && Object.keys(subMenus).map((subMenu) => <Item>{subMenu}</Item>)}</List>
            </Item>
          </List>
        )
      })}
    </>
  )
}
