import Image from 'next/image';

export default function Logo() {
  return (
      <div className="w-[171.39px] h-[40px] flex items-center">
        <div className="relative w-full h-full">
          <Image
            src="/icon/Logo.png"
            alt="Logo chính"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
  );
}
