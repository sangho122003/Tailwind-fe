export interface Testimonial {
  id: number
  title: string
  dis: string
  page: {
    id: number
    name: string
    url: string
  }
}
export type TestimonialFormProps = {
  initialTitle?: string
  initialDescription?: string
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
  onSubmit: (title: string, description: string) => Promise<void>
}