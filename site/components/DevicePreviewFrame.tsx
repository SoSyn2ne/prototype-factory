'use client'

import { useMemo, useState } from 'react'

type Preset = {
  id: 'mobile' | 'tablet' | 'desktop'
  label: string
  width: number | 'fluid'
  height: number
}

const PRESETS: Preset[] = [
  { id: 'mobile', label: 'Mobile', width: 390, height: 844 },
  { id: 'tablet', label: 'Tablet', width: 820, height: 1180 },
  { id: 'desktop', label: 'Desktop', width: 'fluid', height: 720 },
]

export default function DevicePreviewFrame(props: {
  src: string
  title: string
  fullTabHref?: string
}) {
  const [presetId, setPresetId] = useState<Preset['id']>('desktop')

  const preset = useMemo(
    () => PRESETS.find((p) => p.id === presetId) ?? PRESETS[2],
    [presetId]
  )

  const frameStyle: React.CSSProperties =
    preset.width === 'fluid'
      ? { height: preset.height }
      : { width: preset.width, height: preset.height }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-950">
      <header className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/50 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex overflow-x-auto rounded-xl bg-white p-1 shadow-sm dark:bg-slate-900">
            {PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setPresetId(p.id)}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-black transition ${
                  presetId === p.id
                    ? 'bg-primary text-white'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
            {preset.width === 'fluid'
              ? `Fluid · ${preset.height}px height`
              : `${preset.width}×${preset.height}`}
          </div>
        </div>

        {props.fullTabHref ? (
          <a
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm transition hover:bg-slate-50 hover:no-underline dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            href={props.fullTabHref}
            target="_blank"
            rel="noreferrer"
          >
            Open full tab ↗
          </a>
        ) : null}
      </header>

      <div className="p-4">
        <div className="flex w-full justify-center">
          <div
            className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950 ${
              preset.width === 'fluid' ? 'w-full' : ''
            }`}
            style={frameStyle}
          >
            <iframe
              src={props.src}
              title={props.title}
              className="h-full w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50 px-5 py-4 text-center dark:border-slate-800 dark:bg-slate-900/50">
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
          PF demo wrapper • device preview
        </p>
      </footer>
    </section>
  )
}
