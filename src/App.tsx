import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Mail, QrCode } from 'lucide-react'
import { useEffect, useState } from 'react'
import { content, getVisibleProjects, type Locale } from './content'
import { Navigation } from './components/Navigation'
import { Reveal } from './components/Reveal'
import { WeChatLightbox } from './components/WeChatLightbox'

function App() {
  const [locale, setLocale] = useState<Locale>('zh')
  const [qrOpen, setQrOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const copy = content[locale]
  const visibleProjects = getVisibleProjects()

  useEffect(() => {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    document.title = locale === 'zh' ? '周谢雄 · 全栈开发者与 AI 应用工程师' : 'Xiexiong Chou · Full Stack & AI Application Developer'
  }, [locale])

  return (
    <>
      <Navigation locale={locale} nav={copy.nav} onLocaleChange={setLocale} />
      <main>
        <section id="top" className="hero-section">
          <div className="hero-inner">
            <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
              <div className="availability"><span aria-hidden="true" />{copy.available}</div>
              <p className="hero-university">{copy.university}</p>
              <h1>{copy.name}<span>{copy.englishName}</span></h1>
              <div className="role-line">{copy.roles.map((role) => <span key={role}>{role}</span>)}</div>
              <p className="hero-lead">{copy.heroLead}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">{copy.heroCta}<ArrowDown size={17} /></a>
                <a className="button button-secondary" href="mailto:request502@qq.com">{copy.heroContact}<ArrowUpRight size={17} /></a>
              </div>
            </motion.div>
            <motion.div className="hero-portrait" initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
              <div className="portrait-rings" aria-hidden="true" />
              <img src="/assets/avatar.png" alt={locale === 'zh' ? '周谢雄肖像' : 'Portrait of Xiexiong Chou'} />
              <p><span>SHENZHEN</span><span>2026</span></p>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section section-light">
          <div className="content-width">
            <Reveal className="section-heading"><p className="section-index">{copy.aboutLabel}</p><div><h2>{copy.aboutTitle}</h2><p className="section-lead">{copy.aboutLead}</p></div></Reveal>
            <div className="identity-list">
              {copy.identities.map((identity, index) => (
                <Reveal className="identity-row" delay={index * 0.06} key={identity.title}>
                  <span className="row-number">0{index + 1}</span><h3>{identity.title}</h3><p>{identity.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="section section-graphite">
          <div className="content-width">
            <Reveal className="section-heading"><p className="section-index">{copy.capabilityLabel}</p><div><h2>{copy.capabilityTitle}</h2><p className="section-lead">{copy.capabilityLead}</p></div></Reveal>
            <div className="capability-list">
              {copy.capabilities.map((capability, index) => (
                <Reveal className="capability-row" delay={index * 0.04} key={capability.title}>
                  <span className="row-number">0{index + 1}</span>
                  <div><h3>{capability.title}</h3><p>{capability.description}</p></div>
                  <div className="technology-list">{capability.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blueprint">
          <div className="content-width">
            <Reveal className="delivery-intro"><p className="section-index">{copy.deliveryLabel}</p><h2>{copy.deliveryTitle}</h2><p className="section-lead">{copy.deliveryLead}</p></Reveal>
            <div className="delivery-flow">
              {copy.deliverySteps.map((step, index) => (
                <Reveal className="delivery-step" delay={index * 0.05} key={step.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.text}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="delivery-tools">{copy.deliveryTools.map((tool) => <span key={tool}>{tool}</span>)}</Reveal>
          </div>
        </section>

        <section id="work" className="section section-work">
          <div className="content-width">
            <Reveal className="section-heading"><p className="section-index">{copy.workLabel}</p><div><h2>{copy.workTitle}</h2><p className="section-lead">{copy.workLead}</p></div></Reveal>
            {visibleProjects.map((project, index) => project.featured ? (
              <Reveal className="featured-project" key={project.name}>
                <div className="project-copy"><p className="project-label">{project.label}</p><h3>{project.name}<span>速豆</span></h3><p>{project.description[locale]}</p><div className="technology-list project-technologies">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer">{copy.visitProject}<ArrowUpRight size={18} /></a></div>
                <div className="project-visual" aria-label="PixelBeads platform system map"><div className="pixel-window"><header><span /><span /><span /></header><div className="pixel-content"><strong>PIXELBEADS</strong><div className="pixel-grid" aria-hidden="true">{Array.from({ length: 42 }).map((_, pixel) => <i key={pixel} />)}</div><p>AI · SaaS · POS · ERP · IoT</p></div></div></div>
              </Reveal>
            ) : (
              <Reveal className="research-project" key={project.name} delay={index * 0.05}>
                <div><p className="project-label">{project.label}</p><h3>{project.name}</h3></div><p>{project.description[locale]}</p><div className="technology-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><a href={project.href} target="_blank" rel="noreferrer" aria-label={`${copy.viewSource}: ${project.name}`}><ArrowUpRight size={20} /></a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="section section-education">
          <div className="content-width">
            <Reveal className="section-heading"><p className="section-index">{copy.educationLabel}</p><div><h2>{copy.educationTitle}</h2></div></Reveal>
            <Reveal className="education-grid">
              <div><p className="education-meta">2025 — PRESENT</p><h3>{locale === 'zh' ? '深圳大学' : 'Shenzhen University'}</h3><p>{copy.degree}</p></div>
              <div><p className="education-meta">{copy.researchLabel}</p><ul>{copy.research.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="content-width">
            <Reveal><p className="section-index">{copy.contactLabel}</p><h2>{copy.contactTitle}</h2><p className="section-lead">{copy.contactLead}</p>
              <div className="contact-actions">
                <a href="mailto:request502@qq.com"><Mail size={19} />{copy.email}<span>request502@qq.com</span></a>
                <a href="https://github.com/xiaozhou266" target="_blank" rel="noreferrer"><Github size={19} />{copy.github}<span>@xiaozhou266</span></a>
                <button type="button" onClick={() => setQrOpen(true)}><QrCode size={19} />{copy.wechat}<span>{copy.qrHint}</span></button>
              </div>
            </Reveal>
            <footer><span>{copy.name}</span><span>{copy.footer}</span><span>© 2026</span></footer>
          </div>
        </section>
      </main>
      <AnimatePresence>{qrOpen && <WeChatLightbox open={qrOpen} title={copy.qrTitle} hint={copy.qrHint} closeLabel={copy.close} onClose={() => setQrOpen(false)} />}</AnimatePresence>
    </>
  )
}

export default App

