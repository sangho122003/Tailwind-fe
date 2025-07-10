  export type ValueBlock = {
    id: number
    image: string
    title: string
    subject: string
    page: {
      id: number
    }
  }
export type Props = {
  initialTitle?: string
  initialDescription?: string
  onSubmit: (title: string, description: string, file?: File | null) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
  isUpdate?: boolean
}