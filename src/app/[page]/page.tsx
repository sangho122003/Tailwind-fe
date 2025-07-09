import PageClient from "./PageClient";
export default async function Page({ params }: { params: { page: string } }) {
  const { page } = await Promise.resolve(params); 
  return <PageClient page={page} />;
}
