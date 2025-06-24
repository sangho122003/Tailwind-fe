type TestimonialData = {
  title: string;
  title2: string;
  dis: string;
  dis2: string;
  dis3: string;
};
export default function TestimonialBlock({ data }: { data: TestimonialData }) {
  return (
    <div className="w-full h-[80vh] flex flex-col lg:flex-row items-center justify-center bg-keythr">
      <div className="flex-1 p-10 md:p-[10vh] flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {data.title}
        </h1>
        <p className="text-white text-lg md:text-xl">
          {data.title2}
        </p>
      </div>
      <div className="flex-1 p-10 md:p-[10vh]">
        <h1 className="text-white text-2xl md:text-3xl mb-4 italic">
          "{data.dis}"
        </h1>
        <strong className="text-white block mb-2">{data.dis2}</strong>
        <p className="text-white">{data.dis3}</p>
      </div>
    </div>
  );
}
