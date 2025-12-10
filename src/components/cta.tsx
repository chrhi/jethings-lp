/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import toast from "react-hot-toast"
import { useLocale, useTranslations } from "next-intl"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { cn } from "@/lib/utils"

export default function SendRequestModal({
  buttonClassName,
}: {
  buttonClassName?: string
}) {
  const t = useTranslations("cta")
  const tValidation = useTranslations("cta.validation")
  const locale = useLocale()
  const isRTL = locale === "ar"
  const [open, setOpen] = React.useState(false)
  const [isDesktop, setIsDesktop] = React.useState(false)

  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const formSchema = z.object({
    fullName: z.string().min(2, tValidation("nameRequired")),
    phone: z.string().min(8, tValidation("phoneInvalid")),
    email: z.string().email(tValidation("emailInvalid")),
    description: z.string().min(10, tValidation("descriptionRequired")),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      description: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)
    setSuccess(null)
    setError(null)

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        throw new Error(t("form.error"))
      }
      toast.success(t("form.success"))
      setSuccess(`✅ ${t("form.success")}`)
      form.reset()
      setOpen(false) // close modal/drawer

      // ✅ Fire Facebook Pixel Lead event
      if (typeof window !== "undefined" && (window as any).fbq) {
        ;(window as any).fbq("track", "Lead", {
          name: values.fullName,
          email: values.email,
          phone: values.phone,
        })
      }
    } catch (err: any) {
      setError(err.message || t("form.error"))
    } finally {
      setLoading(false)
    }
  }

  const FormContent = () => (
    <div
      className={`w-full p-2 ${isRTL ? "font-tajawal text-right" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
      lang={locale}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={`space-y-6 ${isRTL ? "text-right" : ""}`}
        >
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.fullName")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.fullNamePlaceholder")}
                    className={isRTL ? "text-right placeholder:text-right" : ""}
                    dir={isRTL ? "rtl" : "ltr"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.phone")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.phonePlaceholder")}
                    className={isRTL ? "text-right placeholder:text-right" : ""}
                    dir={isRTL ? "rtl" : "ltr"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={t("form.emailPlaceholder")}
                    className={isRTL ? "text-right placeholder:text-right" : ""}
                    dir={isRTL ? "rtl" : "ltr"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.description")}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t("form.descriptionPlaceholder")}
                    className={`min-h-[120px] ${
                      isRTL ? "text-right placeholder:text-right leading-relaxed" : ""
                    }`}
                    dir={isRTL ? "rtl" : "ltr"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? t("form.sending") : t("form.sendRequest")}
          </Button>

          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </Form>
    </div>
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          "cursor-pointer font-semibold rounded-full transition text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 active:translate-y-[1px]",
          buttonClassName
        )}
      >
        {t("button")}
      </button>

      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent
            dir={isRTL ? "rtl" : "ltr"}
            className={`sm:max-w-[600px] ${isRTL ? "font-cairo text-right" : ""}`}
          >
            <DialogHeader className={isRTL ? "text-right" : ""}>
              <DialogTitle>{t("title")}</DialogTitle>
              <DialogDescription className={isRTL ? "text-right" : ""}>
                {t("description")}
              </DialogDescription>
            </DialogHeader>
            <FormContent />
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent
            dir={isRTL ? "rtl" : "ltr"}
            className={isRTL ? "font-tajawal text-right" : ""}
          >
            <DrawerHeader className={isRTL ? "text-right" : ""}>
              <DrawerTitle>{t("title")}</DrawerTitle>
              <DrawerDescription className={isRTL ? "text-right" : ""}>
                {t("description")}
              </DrawerDescription>
            </DrawerHeader>
            <FormContent />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">{t("form.cancel")}</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      )}
    </>
  )
}
