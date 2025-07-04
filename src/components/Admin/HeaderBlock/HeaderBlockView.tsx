import { HeaderBlock } from './types';

export default function HeaderBlockView({ data }: { data: HeaderBlock }) {
  return (
    <>
      <img
        src={`http://localhost:8080${data.image}`}
        alt="Header"
        className="rounded-md max-h-64 object-cover mb-4 border"
      />
      <p className="text-lg font-semibold text-gray-800 mb-2">{data.title}</p>
      <p className="text-gray-600 mb-4">{data.title2}</p>
    </>
  );
}
