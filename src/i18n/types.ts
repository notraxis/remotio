type Primitive = string | number | boolean

/** Verschachtelte Schlüssel eines Objekts, inklusive der Ebenen, die nicht weiter verzweigen. */
type CopyPath<T> = {
  [K in keyof T & string]: T[K] extends Primitive | readonly unknown[]
    ? K
    : `${K}.${CopyPath<T[K]>}`
}[keyof T & string]

/** Wert, der hinter einem Punktpfad liegt. */
type CopyValue<T, P extends string> = P extends `${infer Head}.${infer Rest}`
  ? Head extends keyof T
    ? CopyValue<T[Head], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never

/** Textbaustein innerhalb eines Absatzes. */
type LegalPart = string | { readonly placeholder: string }

/** Ein Absatz aus Textbausteinen, z. B. mit hervorgehobenem Platzhalter. */
type LegalParagraph = readonly LegalPart[]

/** Abschnitt der Rechtstexte. */
type LegalSection = {
  readonly heading: string
  readonly body: readonly LegalParagraph[]
}

/** Beschriftung/Wert-Paar, z. B. der Anbieterkennzeichnung. */
type DetailRow = readonly [string, string]

export type {
  CopyPath,
  CopyValue,
  LegalPart,
  LegalParagraph,
  LegalSection,
  DetailRow,
}
