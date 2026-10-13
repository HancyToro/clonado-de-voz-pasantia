import { useState } from 'react'

type Section = 'ruido' | 'clonados' | 'mejorados' | null

function AudioCard({ label, src, variant }: { label: string; src: string; variant: 'before' | 'after' }) {
  return (
    <div className={`rounded-xl p-4 border-2 ${
      variant === 'before'
        ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
        : 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
          variant === 'before'
            ? 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200'
            : 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200'
        }`}>
          {variant === 'before' ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Antes
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Después
            </>
          )}
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
      </div>
      <audio controls className="w-full h-10">
        <source src={src} type="audio/wav" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  )
}

function ModelSection({ title, description, samples }: {
  title: string;
  description: string;
  samples: { name: string; before: string; after: string }[];
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
          {title.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {samples.map((sample, idx) => (
          <div key={idx} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-xs font-bold">
                {idx + 1}
              </span>
              Muestra {idx + 1}: {sample.name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AudioCard label="Audio con ruido" src={sample.before} variant="before" />
              <AudioCard label="Audio procesado" src={sample.after} variant="after" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

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

  // Audio samples for Noise2Noise (replace with your actual audio files)
  const noise2noiseSamples = [
    {
      name: 'Voz masculina',
      before: '/audios/noise2noise/sample1_before.wav',
      after: '/audios/noise2noise/sample1_after.wav',
    },
    {
      name: 'Voz femenina',
      before: '/audios/noise2noise/sample2_before.wav',
      after: '/audios/noise2noise/sample2_after.wav',
    },
    {
      name: 'Voz en ambiente ruidoso',
      before: '/audios/noise2noise/sample3_before.wav',
      after: '/audios/noise2noise/sample3_after.wav',
    },
  ]

  // Audio samples for ClearVoiceStudio (replace with your actual audio files)
  const clearVoiceSamples = [
    {
      name: 'Voz masculina',
      before: '/audios/clearvoice/sample1_before.wav',
      after: '/audios/clearvoice/sample1_after.wav',
    },
    {
      name: 'Voz femenina',
      before: '/audios/clearvoice/sample2_before.wav',
      after: '/audios/clearvoice/sample2_after.wav',
    },
    {
      name: 'Voz en ambiente ruidoso',
      before: '/audios/clearvoice/sample3_before.wav',
      after: '/audios/clearvoice/sample3_after.wav',
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
        {activeSection === 'ruido' && (
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              {/* Section Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">🔇</span>
                  Reducción de Ruido
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  Comparación de audios antes y después de pasar por los modelos de IA
                </p>
              </div>

              {/* Section Body */}
              <div className="p-6 md:p-8">
                {/* Noise2Noise Subsection */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Noise2Noise</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Modelo de reducción de ruido basado en aprendizaje profundo</p>
                    </div>
                  </div>
                  <ModelSection
                    title="Noise2Noise"
                    description="Resultados del modelo Noise2Noise para eliminación de ruido"
                    samples={noise2noiseSamples}
                  />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

                {/* ClearVoiceStudio Subsection */}
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">ClearVoiceStudio</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Resultados del modelo ClearVoiceStudio para mejora de voz</p>
                    </div>
                  </div>
                  <ModelSection
                    title="ClearVoiceStudio"
                    description="Resultados del modelo ClearVoiceStudio para clarificación de voz"
                    samples={clearVoiceSamples}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'clonados' && (
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">🎙️</span>
                  Audios Clonados
                </h2>
                <p className="text-purple-100 text-sm mt-1">
                  Resultados de clonación de voz con modelos de aprendizaje profundo
                </p>
              </div>
              <div className="p-6 text-center py-12">
                <div className="text-6xl mb-4">🎵</div>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Los audios de esta sección estarán disponibles próximamente.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'mejorados' && (
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-amber-500 to-orange-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  Audios Clonados Mejorados
                </h2>
                <p className="text-amber-100 text-sm mt-1">
                  Audios clonados con mejoras de naturalidad y calidad
                </p>
              </div>
              <div className="p-6 text-center py-12">
                <div className="text-6xl mb-4">🎵</div>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  Los audios de esta sección estarán disponibles próximamente.
                </p>
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
