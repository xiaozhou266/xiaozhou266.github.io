import { Languages, Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Locale } from '../content'

type NavigationProps = {
  locale: Locale
  nav: Record<'about' | 'capabilities' | 'work' | 'education' | 'contact', string>
  onLocaleChange: (locale: Locale) => void
}

export function Navigation({ locale, nav, onLocaleChange }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const items = [
    ['about', nav.about],
    ['capabilities', nav.capabilities],
    ['work', nav.work],
    ['education', nav.education],
    ['contact', nav.contact],
  ] as const

  return (
    <header className="site-nav">
      <a className="nav-brand" href="#top" aria-label={locale === 'zh' ? '返回顶部' : 'Back to top'}>
        <span>XC</span>
        <strong>{locale === 'zh' ? '周谢雄' : 'Xiexiong Chou'}</strong>
      </a>
      <button className="nav-menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {items.map(([href, label]) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)}>{label}</a>)}
        <button className="language-toggle" type="button" onClick={() => onLocaleChange(locale === 'zh' ? 'en' : 'zh')} aria-label={locale === 'zh' ? 'Switch to English' : '切换至中文'}>
          <Languages size={16} />
          <span>{locale === 'zh' ? 'EN' : '中文'}</span>
        </button>
      </nav>
    </header>
  )
}

