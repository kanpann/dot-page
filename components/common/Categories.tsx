// 카테고리 정보를 밖에서 주입 받게 수정하면 이 컴포넌트를 재사용할 수 있을 것 같음. 나중에 고려해봄
import { Category } from '../../site.config'
import styled from 'styled-components'
import Link from 'next/link'

const List = styled.ul`
  list-style: none;
  padding: 0px;
  font-family: 'nanumSquare';
`
const Item = styled.li`
  padding-top: 5px;
  padding-left: 20px;
  margin-top: 10px;
  font-weight: bold;
  a {
    color: black;
    &:link {
      text-decoration: none;
    }
    &:visited {
      text-decoration: none;
    }
    &:hover {
      text-decoration: none;
    }
  }
`

const Categories = () => {
  const categoryNames = Object.keys(Category)
  return (
    <>
      {categoryNames.map((categoryName, index) => {
        const mainMenu = Category[categoryName]

        const { isSub } = mainMenu

        let subMenus
        if (isSub) {
          subMenus = Category[categoryName]['sub']
        }
        return (
          <List key={index}>
            <Item>
              <Link href={`/?menu=${categoryName}`}>{categoryName}</Link>
              <List>
                {isSub &&
                  subMenus.map((subMenu, index) => (
                    <Item key={index}>
                      <Link href={`/?topMenu=${categoryName}&menu=${subMenu}`}>{subMenu}</Link>
                    </Item>
                  ))}
              </List>
            </Item>
          </List>
        )
      })}
    </>
  )
}
export default Categories
