import { useState } from 'react'

type Section = 'ruido' | 'clonados' | 'audiolibro' | 'mejorados' | null

type AudioVariant = 'before' | 'after' | 'reference' | 'enhance' | 'source' | 'target' | 'cloned'

function AudioCard({ label, src, variant }: { label: string; src: string; variant: AudioVariant }) {
  const variantStyles: Record<AudioVariant, { bg: string; badge: string }> = {
    before: {
      bg: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      badge: 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200',
    },
    after: {
      bg: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      badge: 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200',
    },
    reference: {
      bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      badge: 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200',
    },
    enhance: {
      bg: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
      badge: 'bg-amber-100 dark:bg-amber-800 text-amber-700 dark:text-amber-200',
    },
    source: {
      bg: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
      badge: 'bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200',
    },
    target: {
      bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
      badge: 'bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200',
    },
    cloned: {
      bg: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
      badge: 'bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200',
    },
  }

  const icons: Record<AudioVariant, React.ReactNode> = {
    before: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    after: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    reference: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    enhance: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    source: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    target: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    ),
    cloned: (
      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  const labels: Record<AudioVariant, string> = {
    before: 'Audio con ruido',
    after: 'Audio mejorado',
    reference: 'Referencia',
    enhance: 'Resemble Enhance',
    source: 'Fuente',
    target: 'Objetivo',
    cloned: 'Voz clonada',
  }

  const style = variantStyles[variant]

  return (
    <div className={`rounded-xl p-4 border-2 ${style.bg}`}>
      <div className="flex items-center gap-2 mb-3">
        {labels[variant] && (
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${style.badge}`}>
            {icons[variant]}
            {labels[variant]}
          </span>
        )}
        {(variant !== 'before' && variant !== 'after' && variant !== 'source' && variant !== 'target' && variant !== 'cloned') && (
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        )}
      </div>
      <audio controls className="w-full h-10">
        <source src={src} type="audio/wav" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  )
}

function NoiseModelSection({ title, description, samples, gradient }: {
  title: string;
  description: string;
  samples: { name: string; before: string; after: string }[];
  gradient: string;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm`}>
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
              {sample.name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AudioCard label="" src={sample.before} variant="before" />
              <AudioCard label="" src={sample.after} variant="after" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CloneModelSection({ title, description, samples, gradient }: {
  title: string;
  description: string;
  samples: { name: string; before: string; reference: string; cloned: string }[];
  gradient: string;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm`}>
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
              <span className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center text-xs font-bold">
                {idx + 1}
              </span>
              {sample.name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AudioCard label="" src={sample.before} variant="source" />
              <AudioCard label="" src={sample.reference} variant="target" />
              <AudioCard label="" src={sample.cloned} variant="cloned" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function EnhanceModelSection({ title, description, samples, gradient }: {
  title: string;
  description: string;
  samples: { name: string; before: string; enhanced: string }[];
  gradient: string;
}) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm`}>
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
              <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 flex items-center justify-center text-xs font-bold">
                {idx + 1}
              </span>
              {sample.name}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AudioCard label="" src={sample.before} variant="before" />
              <AudioCard label="" src={sample.enhanced} variant="enhance" />
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
      id: 'audiolibro',
      label: 'Audiolibro Clonado',
      icon: '📖',
      description: 'Clonación de voz aplicada a audiolibros con modelos de IA.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'mejorados',
      label: 'Audios Clonados Mejorados',
      icon: '✨',
      description: 'Audios clonados con mejoras aplicadas para mayor naturalidad y calidad.',
      color: 'from-amber-500 to-orange-500',
    },
  ]

  const BASE_URL = '/clonado-de-voz-pasantia'

  const noise2noiseSamples = [
    { name: 'Muestra 1', before: `${BASE_URL}/audios/noise2noise/sample1_before.wav`, after: `${BASE_URL}/audios/noise2noise/sample1_after.wav` },
    { name: 'Muestra 2', before: `${BASE_URL}/audios/noise2noise/sample2_before.wav`, after: `${BASE_URL}/audios/noise2noise/sample2_after.wav` },
    { name: 'Muestra 3', before: `${BASE_URL}/audios/noise2noise/sample3_before.wav`, after: `${BASE_URL}/audios/noise2noise/sample3_after.wav` },
  ]

  const clearVoiceSamples = [
    { name: 'Muestra 1', before: `${BASE_URL}/audios/clearvoice/sample1_before.wav`, after: `${BASE_URL}/audios/clearvoice/sample1_after.wav` },
    { name: 'Muestra 2', before: `${BASE_URL}/audios/clearvoice/sample2_before.wav`, after: `${BASE_URL}/audios/clearvoice/sample2_after.wav` },
    { name: 'Muestra 3', before: `${BASE_URL}/audios/clearvoice/sample3_before.wav`, after: `${BASE_URL}/audios/clearvoice/sample3_after.wav` },
  ]

  const againVcSamples = [
    { name: 'Muestra 1', before: `${BASE_URL}/audios/clonados/again-vc/sample1_before.wav`, reference: `${BASE_URL}/audios/clonados/again-vc/sample1_reference.wav`, cloned: `${BASE_URL}/audios/clonados/again-vc/sample1_cloned.wav` },
    { name: 'Muestra 2', before: `${BASE_URL}/audios/clonados/again-vc/sample2_before.wav`, reference: `${BASE_URL}/audios/clonados/again-vc/sample2_reference.wav`, cloned: `${BASE_URL}/audios/clonados/again-vc/sample2_cloned.wav` },
    { name: 'Muestra 3', before: `${BASE_URL}/audios/clonados/again-vc/sample3_before.wav`, reference: `${BASE_URL}/audios/clonados/again-vc/sample3_reference.wav`, cloned: `${BASE_URL}/audios/clonados/again-vc/sample3_cloned.wav` },
  ]

  const starganVcSamples = [
    { name: 'Muestra 1', before: `${BASE_URL}/audios/clonados/stargan-vc/sample1_before.wav`, reference: `${BASE_URL}/audios/clonados/stargan-vc/sample1_reference.wav`, cloned: `${BASE_URL}/audios/clonados/stargan-vc/sample1_cloned.wav` },
    { name: 'Muestra 2', before: `${BASE_URL}/audios/clonados/stargan-vc/sample2_before.wav`, reference: `${BASE_URL}/audios/clonados/stargan-vc/sample2_reference.wav`, cloned: `${BASE_URL}/audios/clonados/stargan-vc/sample2_cloned.wav` },
    { name: 'Muestra 3', before: `${BASE_URL}/audios/clonados/stargan-vc/sample3_before.wav`, reference: `${BASE_URL}/audios/clonados/stargan-vc/sample3_reference.wav`, cloned: `${BASE_URL}/audios/clonados/stargan-vc/sample3_cloned.wav` },
  ]

  const seedVcSamples = [
    { name: 'Muestra 1', before: `${BASE_URL}/audios/clonados/seed-vc/sample1_before.wav`, reference: `${BASE_URL}/audios/clonados/seed-vc/sample1_reference.wav`, cloned: `${BASE_URL}/audios/clonados/seed-vc/sample1_cloned.wav` },
    { name: 'Muestra 2', before: `${BASE_URL}/audios/clonados/seed-vc/sample2_before.wav`, reference: `${BASE_URL}/audios/clonados/seed-vc/sample2_reference.wav`, cloned: `${BASE_URL}/audios/clonados/seed-vc/sample2_cloned.wav` },
    { name: 'Muestra 3', before: `${BASE_URL}/audios/clonados/seed-vc/sample3_before.wav`, reference: `${BASE_URL}/audios/clonados/seed-vc/sample3_reference.wav`, cloned: `${BASE_URL}/audios/clonados/seed-vc/sample3_cloned.wav` },
  ]

  const enhancedSamples = [
    { name: 'Muestra 1', before: `${BASE_URL}/audios/mejorados/sample1_before.wav`, enhanced: `${BASE_URL}/audios/mejorados/sample1_enhanced.wav` },
    { name: 'Muestra 2', before: `${BASE_URL}/audios/mejorados/sample2_before.wav`, enhanced: `${BASE_URL}/audios/mejorados/sample2_enhanced.wav` },
    { name: 'Muestra 3', before: `${BASE_URL}/audios/mejorados/sample3_before.wav`, enhanced: `${BASE_URL}/audios/mejorados/sample3_enhanced.wav` },
  ]

  const audiobookSamples = [
    { name: 'Fragmento 1', before: `${BASE_URL}/audios/audiolibro/sample1_before.wav`, reference: `${BASE_URL}/audios/audiolibro/sample1_reference.wav`, cloned: `${BASE_URL}/audios/audiolibro/sample1_cloned.wav` },
    { name: 'Fragmento 2', before: `${BASE_URL}/audios/audiolibro/sample2_before.wav`, reference: `${BASE_URL}/audios/audiolibro/sample2_reference.wav`, cloned: `${BASE_URL}/audios/audiolibro/sample2_cloned.wav` },
    { name: 'Fragmento 3', before: `${BASE_URL}/audios/audiolibro/sample3_before.wav`, reference: `${BASE_URL}/audios/audiolibro/sample3_reference.wav`, cloned: `${BASE_URL}/audios/audiolibro/sample3_cloned.wav` },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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

      <main className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveSection(activeSection === btn.id ? null : btn.id)}
              className={`group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                activeSection === btn.id
                  ? 'ring-4 ring-blue-400 shadow-xl scale-105'
                  : 'shadow-lg hover:shadow-xl'
              } bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${btn.color}`}></div>
              <div className="text-3xl mb-3">{btn.icon}</div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                {btn.label}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {btn.description}
              </p>
              <div className={`mt-3 flex items-center text-xs font-medium transition-colors ${
                activeSection === btn.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-500'
              }`}>
                {activeSection === btn.id ? 'Ocultar' : 'Ver audios'}
                <svg
                  className={`w-3.5 h-3.5 ml-1 transition-transform ${activeSection === btn.id ? 'rotate-180' : ''}`}
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

        {activeSection === 'ruido' && (
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">🔇</span>
                  Reducción de Ruido
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  Comparación de audios antes y después de pasar por los modelos de IA
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-10">
                  <NoiseModelSection
                    title="Noise2Noise"
                    description="Modelo de reducción de ruido basado en aprendizaje profundo"
                    samples={noise2noiseSamples}
                    gradient="from-blue-500 to-indigo-600"
                  />
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
                <div>
                  <NoiseModelSection
                    title="ClearVoiceStudio"
                    description="Resultados del modelo ClearVoiceStudio para mejora de voz"
                    samples={clearVoiceSamples}
                    gradient="from-emerald-500 to-teal-600"
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
                  Comparación entre modelos: audio original, voz de referencia y resultado clonado
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-10">
                  <CloneModelSection
                    title="AGAIN-VC"
                    description="Modelo de conversión de voz basado en arquitectura AGAIN"
                    samples={againVcSamples}
                    gradient="from-violet-500 to-purple-600"
                  />
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
                <div className="mb-10">
                  <CloneModelSection
                    title="StarGAN VC"
                    description="Modelo de conversión de voz StarGAN v2"
                    samples={starganVcSamples}
                    gradient="from-pink-500 to-rose-600"
                  />
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>
                <div>
                  <CloneModelSection
                    title="Seed VC"
                    description="Modelo de conversión de voz Seed VC"
                    samples={seedVcSamples}
                    gradient="from-fuchsia-500 to-pink-600"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'audiolibro' && (
          <div className="animate-fadeIn">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className="text-2xl">📖</span>
                  Audiolibro Clonado
                </h2>
                <p className="text-emerald-100 text-sm mt-1">
                  Clonación de voz aplicada a fragmentos de audiolibros
                </p>
              </div>
              <div className="p-6 md:p-8">
                <CloneModelSection
                  title="Audiolibro Clonado"
                  description="Clonación de voz aplicada a audiolibros"
                  samples={audiobookSamples}
                  gradient="from-emerald-500 to-teal-600"
                />
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
                  Audios clonados con mejoras de naturalidad usando Resemble Enhance
                </p>
              </div>
              <div className="p-6 md:p-8">
                <EnhanceModelSection
                  title="Resemble Enhance"
                  description="Mejora de audio clonado con Resemble Enhance"
                  samples={enhancedSamples}
                  gradient="from-amber-500 to-orange-600"
                />
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2026 — Audios Demos</p>
      </footer>
    </div>
  )
}
