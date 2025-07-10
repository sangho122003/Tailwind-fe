import { TestimonialData } from "./type";
export default function TestimonialBlock({ data }: { data: TestimonialData }) {
  const quoteText = '“The most valuable thing about the 340B membership is certainly the sharing of information, the ability to ask questions and get answers, and it’s everybody working towards the same goal. It’s a huge resource for us.”';
  const quoteAuthor = 'Tanya Miller';
  const quoteOrg = 'Signature Healthcare Brockton Hospital, MA';

  return (
    <div className="w-full bg-secondary text-white">
      <div className="flex flex-col lg:flex-row w-full px-5 py-8 lg:px-16 lg:py-25 lg:h-120">
        <div className="w-full lg:flex-[8] flex flex-col justify-start lg:justify-start mb-7.5 lg:mb-0">
          <h1 className="text-2xl lg:text-4xl font-extrabold uppercase leading-tight">
            {data.title}
          </h1>
          <p className="mt-2 lg:mt-3 text-xl leading-relaxed">{data.dis}</p>
        </div>
        <div className="hidden lg:block lg:flex-[1]" />
        <div className="w-full lg:flex-[12] flex flex-col justify-start lg:justify-start">
          <p className="text-4xl lg:text-4xl font-omnes leading-snug lg:leading-tight mb-4">
            {quoteText}
          </p>
          <p className="text-base lg:text-2xl italic font-normal leading-relaxed mb-2">
            <strong>   {quoteAuthor}</strong>
          </p>
          <p className="text-xs lg:text-xl">{quoteOrg}</p>
        </div>
      </div>
    </div>
  );
}
