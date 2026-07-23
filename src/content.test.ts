import { describe, expect, it } from 'vitest'
import { content, getVisibleProjects, type Locale } from './content'

describe('personal brand content contract', () => {
  it('defaults to Chinese content with the required identity', () => {
    const locale: Locale = 'zh'
    expect(content[locale].name).toBe('周谢雄')
    expect(content[locale].university).toContain('深圳大学')
    expect(content[locale].roles).toContain('全栈开发者')
  })

  it('provides a complete English counterpart', () => {
    expect(content.en.name).toBe('Xiexiong Chou')
    expect(content.en.roles.length).toBe(content.zh.roles.length)
    expect(content.en.capabilities.length).toBe(content.zh.capabilities.length)
  })

  it('keeps the selected work list focused on real representative projects', () => {
    const names = getVisibleProjects().map((project) => project.name)
    expect(names).toContain('PixelBeads')
    expect(names).toContain('HDFS Structure')
    expect(names).not.toContain('AnyRouter Check-in')
    expect(names).not.toContain('ColorfulJune')
  })
})
