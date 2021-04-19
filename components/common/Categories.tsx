// 카테고리 정보를 밖에서 주입 받게 수정하면 이 컴포넌트를 재사용할 수 있을 것 같음. 나중에 고려해봄
import { Category } from '../../site.config'
import styled from 'styled-components'
import Link from 'next/link'

const List = styled.ul`
  list-style: none;
  padding: 0px;
  font-family: 'nanumSquare';
  margin: 0px;
`
const Item = styled.li`
  padding-top: 5px;
  padding-left: 20px;
  margin-top: 10px;
  font-weight: bold;
  a {
    color: ${(props) => (props.color ? props.color : 'black')};
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
          <List key={index} style={{ width: '85%', float: 'right' }}>
            <Item>
              <Link href={`/?menu=${categoryName}`}>
                <a style={{ fontSize: '1.3rem' }}>{categoryName}</a>
              </Link>
              <List>
                {isSub &&
                  subMenus.map((subMenu, index) => (
                    <Item key={index} color="#808080">
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
