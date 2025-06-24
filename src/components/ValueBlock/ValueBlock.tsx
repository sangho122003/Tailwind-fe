type ValueBlockData = {
  Title: string;
  url: string;
  Title2: string;
  subject: string;
};

export default function ValueBlock({ data }: { data: ValueBlockData }) {
  return (
    <div
      style={{ backgroundImage: `url(${data.url})` }}
      className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
    >
      <div className="w-full h-full flex flex-col">
        <div className="relative w-full h-1/3 flex flex-col justify-center px-10">
          <div className="absolute inset-0 bg-keyBlue mix-blend-multiply"></div>
          <h1 className="relative z-10 text-white text-5xl lg:text-6xl font-bold">{data.Title}</h1>
          <h1 className="relative font-fave z-10 text-head text-9xl lg:text-9xl italic">
            Membership
          </h1>
        </div>
        <div className="hidden lg:flex w-full h-2/3">
          <div className="relative flex-1">
            <div className="absolute top-0 left-0 w-[10%] h-[80%] bg-keyBlue mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 w-full h-[20%] bg-keyBlue mix-blend-multiply"></div>
          </div>
          <div className="relative flex-1 px-[5vh] flex flex-col justify-center">
            <div className="absolute inset-0 bg-keyBlue mix-blend-multiply"></div>
            <div className="relative z-10">
              <h1 className="text-white text-[40px] font-bold">{data.Title2}</h1>
              <p className="text-white text-[15px] mt-4">
                At 340B Health, we understand the unique pressures and opportunities facing today’s 340B hospital leaders.
                That is why we are here to equip senior leadership with the tools and expertise you need to make a measurable
                impact on your 340B operations. We can help you optimize your hospital’s efficiency and effectiveness so you
                can serve your patients best. 340B Health is your trusted partner in transforming your hospital’s 340B efforts
                into sustainable success.
              </p>
            </div>
          </div>
        </div>
        <div className="block lg:hidden w-full h-2/3 flex flex-col">
          <div className="w-full h-1/2 flex">
            <div className="w-[10vh] h-full bg-keyBlue mix-blend-multiply"></div>
            <div className="flex-1"></div>
            <div className="w-[10vh] h-full bg-keyBlue mix-blend-multiply"></div>
          </div>
          <div className="relative w-full h-1/2 flex items-center justify-center px-6">
            <div className="absolute inset-0 bg-keyBlue mix-blend-multiply"></div>
            <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
              <h1 className="text-white text-1xl md:text-xl font-bold">
                {data.Title2}
              </h1>
              <p className="text-white text-sm md:text-base mt-4 leading-relaxed">
                At 340B Health, we understand the unique pressures and opportunities
                facing today’s 340B hospital leaders. That is why we are here to equip
                senior leadership with the tools and expertise you need to make a measurable
                impact on your 340B operations. We can help you optimize your hospital’s
                efficiency and effectiveness so you can serve your patients best. 340B Health
                is your trusted partner in transforming your hospital’s 340B efforts into
                sustainable success.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
