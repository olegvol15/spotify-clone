import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaPinterest, FaRss } from 'react-icons/fa';
import LogoIcon from '../ui/LogoIcon';

export default function Footer() {
  return (
    <footer className="bg-[#060d19] border-t border-[#1a3050] px-8 py-8 mt-4">
      <div className="flex items-start justify-between gap-8 mb-6 flex-wrap">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <LogoIcon className="w-[100px] h-auto" />
          <span className="text-white font-semibold text-xl mt-1 tracking-tight">LumiTune</span>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2.5 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#1CA2EA] flex-shrink-0" />
            <span>вул. Музична 42, Київ, Україна</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#1CA2EA] flex-shrink-0" />
            <span>+380 44 123 4567</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#1CA2EA] flex-shrink-0" />
            <span>hello@lumitune.ua</span>
          </div>
          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            <button className="text-white/40 hover:text-[#1CA2EA] transition-colors">
              <FaFacebook size={16} />
            </button>
            <button className="text-white/40 hover:text-[#1CA2EA] transition-colors">
              <FaTwitter size={16} />
            </button>
            <button className="text-white/40 hover:text-[#1CA2EA] transition-colors">
              <FaPinterest size={16} />
            </button>
            <button className="text-white/40 hover:text-[#1CA2EA] transition-colors">
              <FaRss size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1a3050] pt-4 flex items-center gap-6 text-xs text-white/30 flex-wrap">
        <button className="hover:text-white transition-colors">Про нас</button>
        <button className="hover:text-white transition-colors">Контакти</button>
        <button className="hover:text-white transition-colors">Допомога</button>
        <button className="hover:text-white transition-colors">Конфіденційність</button>
        <button className="hover:text-white transition-colors">Умови</button>
      </div>
    </footer>
  );
}
