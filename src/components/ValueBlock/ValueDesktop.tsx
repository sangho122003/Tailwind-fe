export type ValueBlockData = {
  Title: string;
  url: string;
  Title2: string;
  subject: string;
};

export default function ValueDesktop({ data }: { data: ValueBlockData }) {
  return (
    <div
      style={{ backgroundImage: `url(${data.url})` }}
      className="relative w-full h-screen bg-left bg-cover bg-no-repeat"
    >
      <div className="w-full h-full flex">
        <div className="w-1/24 h-full bg-keySecond mix-blend-multiply"></div>

        <div className="w-21/24 h-full relative">
          <div className="w-full h-4/10 relative">
            <div className="absolute inset-0 font-fave bg-keySecond mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="flex flex-col text-left pl-0">
                <p className="text-white font-gothic text-[50px] leading-tight">
                  VALUE OF 340B HEALTH
                </p>
                <p className="text-second font-fave text-[100px] leading-tight">
                  Membership
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-5/10 flex">
            <div className="w-1/2 h-full"></div>
            <div className="w-1/2 h-full bg-keySecond mix-blend-multiply"></div>
            <div className="absolute top-[40%] left-1/2 w-1/2 h-5/10 flex">
              <div className="w-2/10 h-full"></div>
              <div className="w-8/10 h-full flex items-center">
                <div className="w-full h-[80%] flex flex-col gap-4">
                  <div className="flex-[1] flex items-center justify-center p-2">
                    <h3 className="text-white leading-tight line-clamp-3 text-[clamp(1rem,3vw,3rem)]">
                      {data.Title2}
                    </h3>
                  </div>
                  <div className="flex-[2] flex items-center justify-center p-2">
                    <h3 className="text-white">{data.subject}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-1/10 bg-keySecond mix-blend-multiply"></div>
        </div>

        <div className="w-2/24 h-full bg-keySecond mix-blend-multiply"></div>
      </div>
    </div>
  );
}
