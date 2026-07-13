import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm text-neutral-400 font-bold uppercase tracking-widest">Seleccionar {title}</span>
      <div
        className="flex flex-wrap justify-between gap-3"
        data-testid={dataTestId}
      >
        {filteredOptions.map((v) => {
          return (
            <button
              onClick={() => updateOption(option.id, v)}
              key={v}
              className={clx(
                "h-12 rounded-none p-2 flex-1 font-bold text-lg transition-all duration-200 border-2",
                {
                  "border-lamparosos-accent bg-[#a5db00]/10 text-lamparosos-accent shadow-[0_0_15px_rgba(191,255,0,0.3)]": v === current,
                  "border-transparent bg-neutral-900 text-white hover:border-neutral-700 hover:bg-neutral-800": v !== current,
                }
              )}
              disabled={disabled}
              data-testid="option-button"
            >
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default OptionSelect
