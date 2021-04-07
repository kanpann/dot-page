import { parseISO, format } from 'date-fns'

function printElapsedDate(date: string): string {
  const postDate = new Date(date)
  const nowDate = new Date()
  const dateDiff: number = Math.ceil((nowDate.getTime() - postDate.getTime()) / (1000 * 3600 * 24))

  if (dateDiff < 31) {
    return dateDiff + '일 전'
  } else {
    const ElapsedMonth: any = Math.floor(dateDiff / 31)

    if (Math.floor(ElapsedMonth / 12) != 0) {
      return Math.floor(ElapsedMonth / 12) + '년 전'
    }
    return ElapsedMonth + '달 전'
  }
}

type DateProps = {
  date: string
}
export const DateView = ({ date }: DateProps) => {
  return (
    <>
      <time dateTime={date}>
        {format(parseISO(date), 'LLLL d, yyyy')} ({printElapsedDate(date)})
      </time>
    </>
  )
}
