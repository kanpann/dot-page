import { parseISO, format } from 'date-fns'

type DateProps = {
  date: string
}
export default function Date({ date }: DateProps) {
  return <time dateTime={date}>{format(parseISO(date), 'LLLL d, yyyy')}</time>
}
