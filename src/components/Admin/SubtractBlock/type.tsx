export type dataSubtract = {
  id: number
  image: string
  title: string
  dis: string
}
export type Props = {
  initialTitle?: string
  initialDis?: string
  onSubmit: (data: { title: string; dis: string; file: File | null }) => Promise<void>
  onCancel?: () => void
  submitLabel: string
  error?: string
  loading?: boolean
}