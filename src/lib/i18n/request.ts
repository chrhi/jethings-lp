import { getRequestConfig } from "next-intl/server"
import { getUserLocale } from "@/services/locale"
import { defaultLocale } from "./config"

export default getRequestConfig(async () => {
  const locale = await getUserLocale()

  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default,
    }
  } catch (error) {
    // Fallback to default locale if the requested locale file doesn't exist
    console.warn(`Locale file for "${locale}" not found, falling back to "${defaultLocale}"`)
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    }
  }
})
