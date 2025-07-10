
export type BenefitItemType = {
  id?: number
  title: string
  description: string
  image: string | File
}

export type BenefitsBlockType = {
  id: number
  title: string
  items: BenefitItemType[]
}
export type Props = {
  initialTitle: string
  initialItems: BenefitItemType[]
  onSubmit: (title: string, items: BenefitItemType[]) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
}