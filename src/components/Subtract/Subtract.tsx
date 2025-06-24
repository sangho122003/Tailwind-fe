type dataSubtract = {
  Image: string
  Title: string,
  dis: string
}
export default function Subtract({ data }: { data: dataSubtract }) {
  return (
    <div
      style={{ backgroundImage: `url('${data.Image}')` }} className="w-full h-screen bg-cover bg-right bg-no-repeat"
    >
      <div className="hidden md:block w-full h-full">
        <div className="relative w-full h-[15vh]">
          <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
        </div>
        <div className="w-full h-[70vh] flex">
          <div className="w-6/10 h-full relative overflow-hidden text-white p-8 flex flex-col justify-center">
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <h1 className="text-[80px] font-gothic uppercase leading-tight">
                  STAY INFORMED WITH
                </h1>
                <p className="text-[100px] font-fave text-head font-bold italic text-accent mt-2">
                  340B Updates
                </p>
              </div>
              <div className="w-[60%]">
                <h3 className="text-2xl font-extrabold uppercase mb-4">
                  {data.Title}
                </h3>
                <p className="text-base leading-relaxed inline-block w-fit break-words">
                  {data.dis}
                </p>

              </div>
            </div>
          </div>
          <div className="w-3/10 h-full"></div>
          <div className="relative w-1/10 h-full">
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
          </div>
        </div>
        <div className="relative w-full h-[15vh]">
          <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
        </div>
      </div>
      <div className="block md:hidden w-full h-full">
        <div className="relative w-full h-[30vh] p-[10vh] flex items-center">
          <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
          <div className="relative z-10 text-white">
            <h1 className="text-[40px] font-gothic uppercase leading-tight">
              STAY INFORMED WITH
            </h1>
            <p className="text-[50px] font-fave text-head font-bold italic mt-2">
              340B Updates
            </p>
          </div>
        </div>
        <div className="w-full h-[40vh] flex">
          <div className="relative w-2/10 h-full">
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
          </div>
          <div className="w-6/10 h-full"></div>
          <div className="relative w-2/10 h-full">
            <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
          </div>
        </div>
        <div className="relative w-full h-[30vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-primary mix-blend-multiply"></div>
          <div className="relative z-10 w-[60%] text-white">
            <h3 className="text-1xl font-extrabold uppercase mb-4">
              EMPOWER YOUR ADVOCACY TEAM WITH TIMELY POLICY INFORMATION
            </h3>
            <p className="text-base leading-relaxed">
              Stay ahead of policy changes with 340B Health’s exclusive updates,
              in-depth analyses, and expert insights. With real-time access to
              critical information, your advocacy team will be prepared to
              respond proactively to evolving legislative challenges and support
              340B’s future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
