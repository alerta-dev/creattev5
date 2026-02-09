import React from 'react';
import { Monitor, Puzzle, Image, Palette, Music, Box } from 'lucide-react';
import { CategoryCard } from './CategoryCard';
import { SectionHeader } from './SectionHeader';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const categories = [
    {
      title: 'Programas',
      description: 'Explora nuestra colección de programas disponibles para descarga.',
      icon: Monitor,
      href: 'programas'
    },
    {
      title: 'Plugins',
      description: 'Explora nuestra colección de plugins disponibles para descarga.',
      icon: Puzzle,
      href: 'plugins'
    },
    {
      title: 'Renders',
      description: 'Explora nuestra colección de renders disponibles para descarga.',
      icon: Image,
      href: 'renders'
    },
    {
      title: 'Fondos',
      description: 'Explora nuestra colección de fondos disponibles para descarga.',
      icon: Palette,
      href: 'fondos'
    },
    {
      title: 'Sonidos',
      description: 'Explora nuestra colección de sonidos disponibles para descarga.',
      icon: Music,
      href: 'sonidos'
    },
    {
      title: 'Materiales',
      description: 'Explora nuestra colección de materiales disponibles para descarga.',
      icon: Box,
      href: 'materiales'
    }
  ];

  return (
    <>
      <SectionHeader 
        title="Bienvenido a LoquendoAlertCreators"
        description="Tu portal de descargas para recursos digitales. Encuentra programas, plugins, renders y mucho más. Todo lo que necesitas en un solo lugar."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard
            key={category.href}
            title={category.title}
            description={category.description}
            icon={category.icon}
            onClick={() => onNavigate(category.href)}
          />
        ))}
      </div>
    </>
  );
}