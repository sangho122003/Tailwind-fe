import Image from 'next/image';
import Logo from '@/utils/Logo/Logo';

export default function Footer() {
  return (
    <footer className="bg-primary text-white w-full py-10 h-auto lg:max-h-[50vh] lg:overflow-y-auto">
      <div className="px-[4.17vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr_8fr_2fr_6fr] gap-y-6">
          <div className="flex justify-start">
            <Logo />
          </div>
          <div />
          <div className="text-sm leading-relaxed text-left">
            <p>
              340B Health is a nonprofit membership organization of more than 1,500 public and private non-profit hospitals
              and health systems throughout the U.S. that participate in the 340B drug pricing program. We are the leading
              advocate and resource for those hospitals who serve their communities through participation in 340B.
            </p>
          </div>
          <div />
          <div className="flex flex-col items-start gap-3 ">
            <h1 className="text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] font-bold whitespace-nowrap">
              STAY CONNECTED
            </h1>
            <div className="flex gap-4">
              {[
                '/footer/linkin.png',
                '/footer/facebook.png',
                '/footer/x.png',
                '/footer/youtube.png',
                '/footer/mail.png',
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative size-10 sm:size-12 bg-head rounded-full overflow-hidden"
                >
                  <Image
                    src={src}
                    alt={`icon-${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="w-full mt-10 pt-6 text-[14px] min-h-[40px] flex flex-col lg:flex-row justify-between items-center text-center gap-y-2">
          <p>© Copyright 2025 340B Health</p>
          <p className="text-sm">Terms of Use | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
