import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollProgressBar from './ScrollProgressBar'
import { SiteMeta } from '../../site.config'

type HeaderProps = {
  title: string
}
const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
      <Helmet
        meta={[
          { property: 'og:title', content: SiteMeta.title },
          { property: 'og:description', content: SiteMeta.descript },
          { name: 'twitter:card', content: SiteMeta.descript },
          { property: 'og:image', content: SiteMeta.info.image },
        ]}
      >
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <ScrollProgressBar />
    </>
  )
}
export default Header
