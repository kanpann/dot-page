import { Helmet } from 'react-helmet'
import { SiteMeta } from '../../site.config'

const Header = () => {
  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SiteMeta.title}</title>
      </Helmet>
    </>
  )
}
export default Header
