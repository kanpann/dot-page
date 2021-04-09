// 카테고리 정보를 밖에서 주입 받게 수정하면 이 컴포넌트를 재사용할 수 있을 것 같음. 나중에 고려해봄
import { IconButton } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import { Category } from '../site.config'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
)

export const VCategories = () => {
  const classes = useStyles()
  return (
    <>
      {Object.keys(Category).map((categoryName) => {
        const mainMenu = Category[categoryName]

        const { isSub, url } = mainMenu
        return (
          <>
            <Link href={url}>{categoryName}</Link>
            {isSub && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <ArrowDropDownIcon />
              </IconButton>
            )}
          </>
        )
      })}
    </>
  )
}
