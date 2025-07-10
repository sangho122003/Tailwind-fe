export interface VideoBlock {
  id: number;
  urlvideo: string;
  title: string;
  dis: string;
  page: {
    id: number;
    name: string;
    url: string;
  };
} 
export type Props = {
  initialUrl?: string
  initialTitle?: string
  initialDescription?: string
  onSubmit: (url: string, title: string, description: string) => Promise<void>
  submitLabel: string
  loading?: boolean
  error?: string
  onCancel?: () => void
}