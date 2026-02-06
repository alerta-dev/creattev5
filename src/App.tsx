import React from 'react';
import { Navbar } from './components/Navbar';
import { DownloadCard } from './components/DownloadCard';
import { SectionHeader } from './components/SectionHeader';
import { HomePage } from './components/HomePage';
import { programs, plugins, renders, backgrounds, sounds, materials } from './data/downloads';

function App() {
  const [currentSection, setCurrentSection] = React.useState('inicio');
  const [searchQuery, setSearchQuery] = React.useState('');

  const getSectionContent = () => {
    switch (currentSection) {
      case 'programas':
        return {
          items: programs,
          title: 'Programas',
          description: 'Software profesional para creativos y desarrolladores'
        };
      case 'plugins':
        return {
          items: plugins,
          title: 'Plugins',
          description: 'Complementos y extensiones para mejorar tu flujo de trabajo'
        };
      case 'renders':
        return {
          items: renders,
          title: 'Renders',
          description: 'Recursos visuales de alta calidad para tus proyectos'
        };
      case 'fondos':
        return {
          items: backgrounds,
          title: 'Fondos',
          description: 'Fondos y texturas en alta resolución'
        };
      case 'sonidos':
        return {
          items: sounds,
          title: 'Sonidos',
          description: 'Efectos de sonido y recursos de audio'
        };
      case 'materiales':
        return {
          items: materials,
          title: 'Materiales',
          description: 'Materiales y texturas para modelado 3D'
        };
      default:
        return null;
    }
  };

  const sectionContent = getSectionContent();

  // Filtrar items basado en la búsqueda
  const filteredItems = React.useMemo(() => {
    if (!sectionContent || !searchQuery.trim()) {
      return sectionContent?.items || [];
    }

    const query = searchQuery.toLowerCase().trim();
    return sectionContent.items.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );
  }, [sectionContent, searchQuery]);

  // Limpiar búsqueda al cambiar de sección
  React.useEffect(() => {
    setSearchQuery('');
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar onNavigate={setCurrentSection} currentSection={currentSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentSection === 'inicio' ? (
          <HomePage onNavigate={setCurrentSection} />
        ) : sectionContent && (
          <>
            <SectionHeader title={sectionContent.title} description={sectionContent.description} />
            
            {/* Buscador */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar por nombre o descripción..."
                  className="w-full px-6 py-4 bg-zinc-900 text-white rounded-xl border border-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all placeholder-zinc-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Contador de resultados */}
              {searchQuery && (
                <p className="text-center mt-3 text-zinc-400">
                  {filteredItems.length === 0 ? (
                    'No se encontraron resultados'
                  ) : (
                    `${filteredItems.length} resultado${filteredItems.length !== 1 ? 's' : ''} encontrado${filteredItems.length !== 1 ? 's' : ''}`
                  )}
                </p>
              )}
            </div>

            {/* Grid de resultados */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item, index) => (
                  <DownloadCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imageUrl={item.imageUrl}
                    downloadUrl={item.downloadUrl}
                  />
                ))}
              </div>
            ) : searchQuery ? (
              <div className="text-center py-16">
                <svg className="w-16 h-16 mx-auto text-zinc-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-xl text-zinc-400 mb-2">No se encontraron resultados</h3>
                <p className="text-zinc-500">Intenta con otros términos de búsqueda</p>
              </div>
            ) : null}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
