import { ValueBlockData } from './ValueDesktop';

export default function ValueMobile({ data }: { data: ValueBlockData }) {
  return (
    <div
      style={{
        backgroundImage: `url(${data.url})`,
        backgroundSize: '200% 100%',
        backgroundPosition: 'left center',
        backgroundRepeat: 'no-repeat',
      }}
      className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
    >
      {/* Top block */}
      <div className="w-full h-[40vh] bg-keyBlue flex mix-blend-multiply">
        <div className="w-1/24" />
        <div className="w-21/24" />
        <div className="w-2/24" />
      </div>
      <div className="absolute top-0 w-full h-[40vh] flex">
        <div className="w-1/24" />
        <div className="w-21/24 flex flex-col justify-center">
          <p className="text-white font-gothic text-[50px] leading-tight">
            VALUE OF 340B HEALTH
          </p>
          <p className="text-second font-fave text-[100px] leading-tight">
            Membership
          </p>
        </div>
        <div className="w-2/24" />
      </div>

      {/* Middle block */}
      <div className="w-full h-[30vh] flex">
        <div className="w-3/24 bg-keyBlue mix-blend-multiply" />
        <div className="w-19/24" />
        <div className="w-2/24 bg-keyBlue mix-blend-multiply" />
      </div>

      {/* Bottom block */}
      <div className="w-full h-[30vh] flex bg-keyBlue mix-blend-multiply">
        <div className="w-1/24" />
        <div className="w-21/24" />
        <div className="w-2/24" />
      </div>
      <div className="absolute bottom-0 w-full h-[30vh] flex">
        <div className="w-1/24" />
        <div className="w-21/24 flex flex-col">
          <div className="w-full h-1/3 flex items-center">
            <h3 className="text-white uppercase text-[clamp(20px,3vw,3rem)] leading-tight font-bold line-clamp-3">
              {data.Title2}
            </h3>
          </div>
          <div className="w-full h-2/3 flex items-center">
            <h3 className="text-white">{data.subject}</h3>
          </div>
        </div>
        <div className="w-2/24" />
      </div>
    </div>
  );
}
