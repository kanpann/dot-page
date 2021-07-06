import React from 'react'
import { Pagination } from '@material-ui/lab'
import { useRouter } from 'next/dist/client/router'
import { Box } from '@material-ui/core'

type PaginationProps = {
  page: number
  totalPage: number
}
const MyPagination = ({ page, totalPage }: PaginationProps) => {
  const { replace } = useRouter()
  const handleChange = (event: object, page: number) => {
    replace(`?page=${page}`)
  }
  return (
    <Box display="flex" justifyContent="center" m={1} p={1}>
      <Pagination
        count={totalPage}
        page={page}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  )
}
export default MyPagination
