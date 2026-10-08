/**
 * Row of pill toggles with a count on each; exactly one is selected.
 * `options` is [{ id, label, count }].
 */
export default function FilterPills({ options, value, onChange, label }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.id === value
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.id)}
            className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-[10px] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime ${
              active ? 'border-lime bg-lime text-ink' : 'border-line bg-surface text-text hover:border-muted'
            }`}
          >
            <span className="font-ui text-[14px] font-medium leading-[17px]">{option.label}</span>
            <span className={`font-code text-[12px] leading-4 ${active ? '' : 'text-muted'}`}>{option.count}</span>
          </button>
        )
      })}
    </div>
  )
}
