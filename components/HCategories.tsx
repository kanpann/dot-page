// 카테고리 정보를 밖에서 주입 받게 수정하면 이 컴포넌트를 재사용할 수 있을 것 같음. 나중에 고려해봄
import { Category } from '../site.config'

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
          <>
            <div>
              <ul>
                <li>
                  <a href={url}>{categoryName}</a>
                  <ul>{isSub && Object.keys(subMenus).map((subMenu) => <li>{subMenu}</li>)}</ul>
                </li>
              </ul>
            </div>
          </>
        )
      })}
    </>
  )
}
