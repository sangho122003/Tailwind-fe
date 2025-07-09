
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
