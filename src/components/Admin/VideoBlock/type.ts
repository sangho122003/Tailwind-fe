export type VideoBlockSecond = {
  id: number
  url: string
  page: { id: number }
}
export type Props = {
  initialUrl?: string
  onSubmit: (url: string) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
}