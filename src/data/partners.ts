import type { Lang } from './translations'

type Loc = Record<Lang, string>

/**
 * PARTNERS - real partners from the client file (AZB sayt info).
 * No logos were provided yet, so cards render as clean typographic placeholders
 * (company name + specialty). Add real logos to /public/logos/ and set `logo`.
 */
export interface Partner {
  name: string
  /** What the partner provides (shown on typographic cards). */
  specialty?: Loc
  logo?: string
  url?: string
}

// Partner company names/logos are intentionally not shown yet — the client will
// provide official logos later. Keep this empty so no company names render; the
// Partners section falls back to a clean placeholder until logos are added.
export const partners: Partner[] = []
