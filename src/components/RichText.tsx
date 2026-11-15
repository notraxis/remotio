import { Fragment } from 'react'
import type { RichText as RichTextParts } from '../i18n'

export function RichText({ parts }: { parts: RichTextParts }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <Fragment key={index}>{part}</Fragment>
        ) : (
          <strong key={index}>{part.strong}</strong>
        ),
      )}
    </>
  )
}
