import { DefaultTheme } from '../../theme/Theme'
import styled from 'styled-components'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import PublishIcon from '@material-ui/icons/Publish'

const ScrollBtn = styled.div``

const TopScrollBtn = () => {
  const handleUpClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <ScrollBtn>
      <PublishIcon viewBox="0 -6 28 28" onClick={handleUpClick} />
    </ScrollBtn>
  )
}
export default TopScrollBtn
