import { Helmet } from 'react-helmet'

type HeaderProps = {
  title: string
}
const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </>
  )
}
export default Header
