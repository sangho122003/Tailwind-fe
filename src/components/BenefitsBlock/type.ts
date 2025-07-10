export type IconData = {
  id: string;
  image: string;
  title: string;
  description: string;
};
export type BenefitsBlockData = {
  id: string;
  title: string;
  items: [IconData, IconData, IconData, IconData]
};