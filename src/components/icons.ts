import {
  Building2,
  Building,
  ClipboardCheck,
  PencilRuler,
  Hammer,
  Sofa,
  LayoutPanelTop,
  ShieldCheck,
  Crosshair,
  Compass,
  FileCheck2,
  type LucideIcon,
} from 'lucide-react'

/** Maps the string `icon` names used in data files to lucide components. */
export const iconMap: Record<string, LucideIcon> = {
  Building2,
  Building,
  ClipboardCheck,
  PencilRuler,
  Hammer,
  Sofa,
  LayoutPanelTop,
  ShieldCheck,
  Crosshair,
  Compass,
  FileCheck2,
}

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Building2
}
