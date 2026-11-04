import React from "react";
import { Award, ExternalLink } from "lucide-react";

const CertificateCard = ({ Title, Issuer, Date, Img, File }) => (
  <div className="group relative h-full rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 border border-white/10 overflow-hidden shadow-xl transition-all duration-300 hover:shadow-purple-500/20 hover:scale-[1.02]">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity pointer-events-none" />
    {Img && (
      <a href={File} target="_blank" rel="noopener noreferrer" className="relative block bg-black/30">
        <img src={Img} alt={Title} loading="lazy" className="w-full h-44 object-cover object-top" />
      </a>
    )}
    <div className="relative p-5 flex gap-4 items-start">
      <div className="p-3 rounded-lg bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20 text-[#a855f7] shrink-0">
        <Award className="w-6 h-6" />
      </div>
      <div className="min-w-0">
        <h3 className="text-base font-semibold text-white leading-snug">{Title}</h3>
        <p className="text-sm text-gray-400 mt-1">{Issuer}</p>
        <p className="text-xs text-[#6366f1] mt-2">{Date}</p>
        {File && (
          <a
            href={File}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#a855f7] hover:text-white transition-colors"
          >
            View Certificate <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  </div>
);

export default CertificateCard;
