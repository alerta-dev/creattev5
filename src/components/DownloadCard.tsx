import React from 'react';
import { Download } from 'lucide-react';

interface DownloadCardProps {
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl?: string;
}

export function DownloadCard({ title, description, imageUrl, downloadUrl }: DownloadCardProps) {
  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div className="bg-[rgb(24,24,27)] rounded-lg overflow-hidden shadow-lg hover:shadow-green-500/10 transition-shadow border border-green-500/10 hover:border-green-500/30">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <button 
          onClick={handleDownload}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
        >
          <Download className="h-5 w-5" />
          Descargar
        </button>
      </div>
    </div>
  );
}
