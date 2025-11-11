import * as React from "react"

interface EmailTemplateProps {
  firstName: string
  phone: string
  email: string
  description: string
}

export function EmailTemplate({
  firstName,
  phone,
  email,
  description,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>طلب جديد من {firstName}</h1>
      <p>
        <strong>📧 البريد:</strong> {email}
      </p>
      <p>
        <strong>📱 الهاتف:</strong> {phone}
      </p>
      <p>
        <strong>📝 الوصف:</strong> {description}
      </p>
    </div>
  )
}
