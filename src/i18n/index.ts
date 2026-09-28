import { de } from './de'
import type { CopyPath, CopyValue } from './types'

export type {
  CopyPath,
  CopyValue,
  LegalPart,
  LegalParagraph,
  LegalSection,
  DetailRow,
} from './types'

const placeholderPattern = /\{(\w+)\}/g

function resolve(path: string): unknown {
  return path.split('.').reduce<unknown>((node, segment) => {
    if (typeof node !== 'object' || node === null) {
      return undefined
    }
    return (node as Record<string, unknown>)[segment]
  }, de)
}

function interpolate(
  value: string,
  vars?: Record<string, string | number>,
): string {
  if (!vars) {
    return value
  }
  return value.replace(placeholderPattern, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  )
}

/**
 * Liefert den Text hinter einem Punktpfad. Falsche Schlüssel sind Compile-Zeit-
 * Fehler, {platzhalter} werden über vars ersetzt, Listen kommen als Array
 * zurück. Weitere Sprachstände: eigene Datei anlegen und den Import hier
 * umstellen.
 *
 * Die bedingte Signatur (P & (P extends CopyPath ... ? unknown : never)) sorgt
 * dafür, dass ein Tippfehler direkt an der Aufrufstelle als Fehler aufläuft
 * statt still in einen union-typ zu kippen.
 */
export function t<P extends string>(
  key: P & (P extends CopyPath<typeof de> ? unknown : never),
  vars?: Record<string, string | number>,
): CopyValue<typeof de, P> {
  const value = resolve(key)

  if (value === undefined) {
    throw new Error(`Fehlender Textschlüssel: ${key}`)
  }

  return (
    typeof value === 'string' ? interpolate(value, vars) : value
  ) as CopyValue<typeof de, P>
}
