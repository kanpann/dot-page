import React from 'react'
import loadable from '@loadable/component'
const GitalkComponent = loadable(() => import('gitalk/dist/gitalk-component'))
import 'gitalk/dist/gitalk.css'
import { SiteMeta } from '../../site.config'

const Comments = () => {
  const { clientID, clientSecret, repo, owner, admin } = SiteMeta.gitalk
  return (
    <GitalkComponent
      options={{
        clientID: clientID,
        clientSecret: clientSecret,
        repo: repo,
        owner: owner,
        admin: admin,
      }}
    />
  )
}
export default Comments
