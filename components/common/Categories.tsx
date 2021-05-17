// 카테고리 정보를 밖에서 주입 받게 수정하면 이 컴포넌트를 재사용할 수 있을 것 같음. 나중에 고려해봄
import { Category } from '../../site.config'
import styled, { CategoryTheme } from 'styled-components'
import Link from 'next/link'
import { DefaultTheme } from '../../theme/Theme'
import { styled as muiStyled } from '@material-ui/core/styles'
import { Typography, withTheme } from '@material-ui/core'

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
    color: ${(props: CategoryTheme) =>
      props.color == null ? props.theme.app.title : props.color} !important;

    &:hover {
      text-shadow: 0px 4px 10px;

      &::before {
        content: 'ᗔ ';
      }
    }
  }
`
const CategoryName = muiStyled(withTheme(Typography))((props: DefaultTheme) => ({
  marginTop: '30px',
  textAlign: 'center',
  paddingBottom: '10px',
  borderBottom: '4mm ridge rgba(185, 247, 255, .6)',
  color: props.theme.app.box,
  fontWeight: 'bold',
  textShadow: `-1px 0 ${props.theme.app.title}, 0 1px ${props.theme.app.title}, 1px 0 ${props.theme.app.title}, 0 -1px ${props.theme.app.title}`,
}))

const Categories = () => {
  const categoryNames = Object.keys(Category)
  return (
    <>
      <CategoryName variant="h5">Categories</CategoryName>
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
              <Link href={`/menu?menu=${categoryName}`}>
                <a style={{ fontSize: '1.3rem' }}>{categoryName}</a>
              </Link>
              <List>
                {isSub &&
                  subMenus.map((subMenu, index) => (
                    <Item key={index} color="#717171">
                      <Link href={`/menu?topMenu=${categoryName}&menu=${subMenu}`}>{subMenu}</Link>
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
