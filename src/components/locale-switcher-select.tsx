"use client"
import { useTransition, useRef, useEffect } from "react"
import { Locale } from "@/lib/i18n/config"
import { setUserLocale } from "@/services/locale"
import { cn } from "@/lib/utils"

type Props = {
  defaultValue: string
  items: Array<{ value: string; label: string }>
  label: string
  variant?: "header" | "default"
}

export default function CustomLocaleSwitcher({
  defaultValue,
  items,
  label,
  variant = "default",
}: Props) {
  const [isPending, startTransition] = useTransition()
  const selectRef = useRef<HTMLSelectElement>(null)

  function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const locale = event.target.value as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  // Update select element when defaultValue changes
  useEffect(() => {
    if (selectRef.current) {
      selectRef.current.value = defaultValue
    }
  }, [defaultValue])

  const headerStyles =
    variant === "header"
      ? {
          select: `
      appearance-none
      pl-2 pr-6 py-1
      rounded-sm
      bg-transparent
      border border-transparent
      text-white text-sm
      transition-all duration-200
      hover:bg-gray-800/50
      focus:outline-none
      focus:bg-gray-800/50
      ${isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
    `,
          container: "relative flex items-center",
        }
      : {
          select: `
      appearance-none
      pl-8 pr-8 py-2
      rounded-sm
      bg-transparent
      border border-transparent
      transition-colors
      hover:bg-slate-200
      focus:outline-none
      focus:border-slate-300
      ${isPending ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
    `,
          container: "relative flex items-center",
        }

  return (
    <div className={headerStyles.container}>
      <select
        ref={selectRef}
        aria-label={label}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={isPending}
        className={cn(headerStyles.select)}
      >
        {items.map((item) => (
          <option
            key={item.value}
            value={item.value}
            className="bg-gray-900 text-white"
          >
            {item.label}
          </option>
        ))}
      </select>
      {variant === "header" && (
        <svg
          className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-white pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </div>
  )
}
