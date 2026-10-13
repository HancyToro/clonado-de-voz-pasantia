import { useState } from 'react'

type Section = 'ruido' | 'clonados' | 'mejorados' | null

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>(null)

  const buttons: { id: Section; label: string; icon: string; description: string; color: string }[] = [
    {
      id: 'ruido',
      label: 'Reducción de Ruido',
      icon: '🔇',
      description: 'Audios procesados con técnicas de reducción de ruido mediante procesamiento de señales.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'clonados',
      label: 'Audios Clonados',
      icon: '🎙️',
      description: 'Resultados de clonación de voz utilizando modelos de aprendizaje profundo.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'mejorados',
      label: 'Audios Clonados Mejorados',
      icon: '✨',
      description: 'Audios clonados con mejoras aplicadas para mayor naturalidad y calidad.',
      color: 'from-amber-500 to-orange-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="pt-16 pb-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Audios Demos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Clonación de Voz mediante Procesamiento de Señales y Aprendizaje Profundo: Evaluación Comparativa y Adaptación de Modelos para Aplicaciones Terapéuticas
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveSection(activeSection === btn.id ? null : btn.id)}
              className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                activeSection === btn.id
                  ? 'ring-4 ring-blue-400 shadow-xl scale-105'
                  : 'shadow-lg hover:shadow-xl'
              } bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${btn.color}`}></div>

              {/* Icon */}
              <div className="text-4xl mb-4">{btn.icon}</div>

              {/* Label */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {btn.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {btn.description}
              </p>

              {/* Arrow indicator */}
              <div className={`mt-4 flex items-center text-sm font-medium transition-colors ${
                activeSection === btn.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'
              }`}>
                {activeSection === btn.id ? 'Ocultar' : 'Ver audios'}
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${activeSection === btn.id ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        {activeSection && (
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Section Header */}
              <div className={`px-6 py-4 bg-gradient-to-r ${
                buttons.find(b => b.id === activeSection)?.color
              }`}>
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">{buttons.find(b => b.id === activeSection)?.icon}</span>
                  {buttons.find(b => b.id === activeSection)?.label}
                </h2>
              </div>

              {/* Section Body */}
              <div className="p-6">
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎵</div>
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Los audios de esta sección estarán disponibles próximamente.
                  </p>
                  <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                    Agrega tus archivos de audio en esta sección para mostrar las demostraciones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2024 — Audios Demos</p>
      </footer>
    </div>
  )
}
