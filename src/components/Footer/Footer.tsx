import Image from 'next/image';
import { Facebook, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-orange-600 h-[80vh] text-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 relative">
            <Image
              src="/icon/Vector.png"
              alt="340B Health Logo"
              width={32}
              height={32}
            />
          </div>
          <h1 className="text-lg tracking-widest text-white">
            <span className="font-light">340B</span><span className="font-extrabold">HEALTH</span>
          </h1>

        </div>
        <div>
          <p className="text-sm">
            340B Health is a nonprofit membership organization of more than 1,500 public and private non-profit hospitals and health systems throughout the U.S. that participate in the 340B drug pricing program. We are the leading advocate and resource for those hospitals who serve their communities through participation in 340B.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">STAY CONNECTED</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-teal-400 p-2 rounded-full transition hover:bg-teal-500"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-teal-400 p-2 rounded-full transition hover:bg-teal-500"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-teal-400 p-2 rounded-full transition hover:bg-teal-500"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-teal-400 p-2 rounded-full transition hover:bg-teal-500"
              aria-label="Mail"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-teal-400 p-2 rounded-full transition hover:bg-teal-500"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 1200 1227"
                className="w-5 h-5"
              >
                <path d="M1200 0L725 678 1200 1227H930L620 889 310 1227H0L475 678 0 0h270l310 338L890 0h310z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-orange-500 py-4 text-sm container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <p>© Copyright 2024 340B Health</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms of Use</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
