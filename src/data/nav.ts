/** Primary navigation. `labelKey` resolves through translations (nav.*). */
export interface NavItem {
  to: string
  labelKey: string
}

export const mainNav: NavItem[] = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/services', labelKey: 'nav.services' },
  { to: '/projects', labelKey: 'nav.projects' },
  { to: '/customers', labelKey: 'nav.customers' },
  { to: '/partners', labelKey: 'nav.partners' },
  { to: '/contact', labelKey: 'nav.contact' },
]
