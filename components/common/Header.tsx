import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { Helmet } from 'react-helmet'
import ScrollProgressBar from './ScrollProgressBar'

type HeaderProps = {
  title: string
}
const Header = ({ title }: HeaderProps) => {
  const router = useRouter()
  const tag = router.query.tag as string
  const search = router.query.keyword as string
  if (tag) {
    title = `'${tag}' 태그의 글 목록`
  }
  if (search) {
    title = `'${search}'의 검색결과`
  }
  return (
    <>
      <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <ScrollProgressBar />
    </>
  )
}
export default Header
