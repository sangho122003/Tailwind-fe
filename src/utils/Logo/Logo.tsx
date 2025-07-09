import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative w-[10vw] min-w-[100px] h-full">
      <Image
        src="/icon/Logo.png"
        alt="Logo chính"
        fill
        className="object-contain"
        priority
        
      />
      <p className=''></p>
    </div>
  );
}
