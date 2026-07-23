export type Locale = 'zh' | 'en'

export type Capability = {
  title: string
  description: string
  technologies: string[]
}

export type Project = {
  name: string
  label: string
  description: Record<Locale, string>
  technologies: string[]
  href: string
  featured: boolean
}

const projects: Project[] = [
  {
    name: 'PixelBeads',
    label: 'AI + SaaS Platform',
    description: {
      zh: '面向拼豆手作门店的全链路数字化平台。我从产品架构出发，构建小程序、SaaS 后台、POS、ERP、桌面打印连接器、支付、智能硬件与生产部署体系。',
      en: 'An end-to-end digital platform for pixel-bead studios. I shaped and built its mini programs, SaaS admin, POS, ERP, desktop print connector, payments, connected hardware, and production delivery system.',
    },
    technologies: ['React', 'Vue', 'TypeScript', 'Node.js', 'MySQL', 'Redis', 'Docker', 'Nginx', 'WeChat'],
    href: 'https://www.pixelbeads.club',
    featured: true,
  },
  {
    name: 'HDFS Structure',
    label: 'Research · Optimization',
    description: {
      zh: '面向高维数据的特征选择研究与实验实现，用优化算法探索更有效的特征子集。',
      en: 'Research and experimental implementation for high-dimensional feature selection using optimization algorithms.',
    },
    technologies: ['Python', 'Machine Learning', 'Optimization'],
    href: 'https://github.com/xiaozhou266/HDFS-structure',
    featured: false,
  },
]

export const getVisibleProjects = () => projects.filter((project) => project.featured || project.name === 'HDFS Structure')

export const content = {
  zh: {
    name: '周谢雄',
    englishName: 'Xiexiong Chou',
    university: '深圳大学 · 计算机技术硕士研究生',
    nav: { about: '关于', capabilities: '能力', work: '作品', education: '研究', contact: '联系' },
    roles: ['全栈开发者', 'AI 应用开发者', '软件工程师'],
    heroLead: '从产品界面到生产基础设施，我把研究、工程与真实业务连接起来，构建可上线、可维护、可持续演进的软件系统。',
    heroCta: '查看代表作品',
    heroContact: '发起合作',
    available: '接受软件开发与技术合作',
    aboutLabel: '01 / 关于我',
    aboutTitle: '理解全局，也深入每一层。',
    aboutLead: '我是一名深圳大学计算机技术方向研究生，也是一名能够独立走完需求、架构、开发、部署与运维链路的产品开发者。',
    identities: [
      { title: '研究者', text: '关注人工智能、优化算法、大模型应用和软件系统设计，用研究方法拆解复杂问题。' },
      { title: '全栈工程师', text: '覆盖前端、后端、移动端、桌面端、数据与基础设施，在系统边界之间保持一致的工程判断。' },
      { title: '产品构建者', text: '不止交付代码，也理解业务流程、用户体验与上线后的真实运行，把想法做成长期可用的产品。' },
    ],
    capabilityLabel: '02 / 全栈能力',
    capabilityTitle: '一套完整的工程能力，而不是孤立的技术标签。',
    capabilityLead: '技术栈服务于问题。我可以从用户触点一路工作到数据、模型、设备与生产环境。',
    capabilities: [
      { title: 'Web 与移动端', description: '高质量界面、复杂交互与多端产品体验。', technologies: ['React', 'Vue 3', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Android', 'Mini Programs'] },
      { title: '后端与数据', description: '业务建模、API、权限、交易链路与数据系统。', technologies: ['.NET', 'ASP.NET Core', 'Spring Boot', 'Node.js', 'FastAPI', 'Django', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB'] },
      { title: 'AI 应用系统', description: '把模型能力组织成稳定、可评估的真实产品。', technologies: ['OpenAI API', 'Ollama', 'vLLM', 'LangChain', 'RAG', 'AI Agent', 'Computer Vision', 'Deep Learning'] },
      { title: '桌面与系统开发', description: '连接本地系统、硬件与云端服务的桌面软件。', technologies: ['Electron', 'WPF', 'WinForms', 'Qt', 'Windows API', 'Hook', 'Protocol Analysis', 'Network Programming'] },
      { title: '工业通信与 IoT', description: '面向设备接入、消息传输与现场系统集成。', technologies: ['OPC UA', 'MQTT', 'Modbus', 'Device Communication'] },
    ] as Capability[],
    deliveryLabel: '03 / 从开发到上线',
    deliveryTitle: '写完代码，不等于完成交付。',
    deliveryLead: '我把部署和运行视为产品的一部分：从架构选择、容器化与自动化发布，到反向代理、数据迁移、监控、回滚和线上验证。',
    deliverySteps: [
      { title: '定义', text: '梳理业务目标、边界、风险与验收标准。' },
      { title: '架构', text: '选择可演进的服务、数据与集成方案。' },
      { title: '构建', text: '端到端实现产品、接口、数据与自动化测试。' },
      { title: '上线', text: 'Docker、Nginx、CI/CD、云部署与安全配置。' },
      { title: '运行', text: '健康检查、日志、备份、监控、回滚与持续优化。' },
    ],
    deliveryTools: ['Linux', 'Docker', 'Docker Compose', 'Nginx', 'Git', 'GitHub Actions', 'CI/CD', 'Cloud Deployment', 'Monitoring', 'Backup & Recovery'],
    workLabel: '04 / 代表作品',
    workTitle: '作品，是能力最清楚的证据。',
    workLead: '每个项目都从真实问题出发，并走到可以被使用、被验证的状态。',
    visitProject: '访问产品',
    viewSource: '查看项目',
    educationLabel: '05 / 教育与研究',
    educationTitle: '工程实践，也需要研究深度。',
    degree: '计算机技术硕士',
    researchLabel: '研究方向',
    research: ['人工智能', '优化算法', '大模型应用', '软件系统设计'],
    contactLabel: '06 / 合作',
    contactTitle: '一起把想法做成可运行的产品。',
    contactLead: '软件定制开发、AI 应用、企业系统、桌面软件、系统集成与技术咨询。',
    email: '邮件联系',
    github: 'GitHub',
    wechat: '微信',
    qrTitle: '微信联系',
    qrHint: '扫描二维码添加微信',
    close: '关闭',
    footer: '以工程解决真实问题。',
  },
  en: {
    name: 'Xiexiong Chou',
    englishName: '周谢雄',
    university: 'Shenzhen University · Master Student of Computer Technology',
    nav: { about: 'About', capabilities: 'Capabilities', work: 'Work', education: 'Research', contact: 'Contact' },
    roles: ['Full Stack Developer', 'AI Application Developer', 'Software Engineer'],
    heroLead: 'From product interfaces to production infrastructure, I connect research, engineering, and real business needs to build software that ships, scales, and lasts.',
    heroCta: 'View selected work',
    heroContact: 'Start a conversation',
    available: 'Available for software and technology partnerships',
    aboutLabel: '01 / About',
    aboutTitle: 'I see the whole system and work deeply across every layer.',
    aboutLead: 'I am a Computer Technology postgraduate at Shenzhen University and a product developer who can own the path from requirements and architecture to development, deployment, and operations.',
    identities: [
      { title: 'Researcher', text: 'I study artificial intelligence, optimization algorithms, LLM applications, and software systems, using research methods to unpack complex problems.' },
      { title: 'Full-stack engineer', text: 'I work across frontend, backend, mobile, desktop, data, and infrastructure while keeping engineering decisions coherent across boundaries.' },
      { title: 'Product builder', text: 'I go beyond code to understand workflows, user experience, and production reality, turning ideas into products designed to last.' },
    ],
    capabilityLabel: '02 / Full-stack capability',
    capabilityTitle: 'A complete engineering practice, not a collection of isolated technologies.',
    capabilityLead: 'The stack serves the problem. I can work from the user touchpoint through data, models, devices, and production infrastructure.',
    capabilities: [
      { title: 'Web & Mobile', description: 'High-quality interfaces, complex interactions, and multi-platform product experiences.', technologies: ['React', 'Vue 3', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter', 'Android', 'Mini Programs'] },
      { title: 'Backend & Data', description: 'Domain modeling, APIs, permissions, transaction flows, and data systems.', technologies: ['.NET', 'ASP.NET Core', 'Spring Boot', 'Node.js', 'FastAPI', 'Django', 'MySQL', 'PostgreSQL', 'Redis', 'MongoDB'] },
      { title: 'AI Application Systems', description: 'Turning model capability into stable and measurable products.', technologies: ['OpenAI API', 'Ollama', 'vLLM', 'LangChain', 'RAG', 'AI Agent', 'Computer Vision', 'Deep Learning'] },
      { title: 'Desktop & Systems', description: 'Desktop software that connects local systems, hardware, and cloud services.', technologies: ['Electron', 'WPF', 'WinForms', 'Qt', 'Windows API', 'Hook', 'Protocol Analysis', 'Network Programming'] },
      { title: 'Industrial & IoT', description: 'Device access, messaging, and integration for field systems.', technologies: ['OPC UA', 'MQTT', 'Modbus', 'Device Communication'] },
    ] as Capability[],
    deliveryLabel: '03 / Build to production',
    deliveryTitle: 'Code complete is not delivery complete.',
    deliveryLead: 'I treat deployment and operations as part of the product: architecture, containers, automated releases, reverse proxies, data migration, observability, rollback, and live verification.',
    deliverySteps: [
      { title: 'Frame', text: 'Clarify goals, boundaries, risks, and acceptance criteria.' },
      { title: 'Architect', text: 'Choose evolvable service, data, and integration patterns.' },
      { title: 'Build', text: 'Implement the product, APIs, data, and automated tests end to end.' },
      { title: 'Ship', text: 'Docker, Nginx, CI/CD, cloud delivery, and security configuration.' },
      { title: 'Operate', text: 'Health checks, logs, backups, monitoring, rollback, and iteration.' },
    ],
    deliveryTools: ['Linux', 'Docker', 'Docker Compose', 'Nginx', 'Git', 'GitHub Actions', 'CI/CD', 'Cloud Deployment', 'Monitoring', 'Backup & Recovery'],
    workLabel: '04 / Selected work',
    workTitle: 'Work is the clearest evidence of capability.',
    workLead: 'Each project begins with a real problem and reaches a state that can be used and verified.',
    visitProject: 'Visit product',
    viewSource: 'View project',
    educationLabel: '05 / Education & research',
    educationTitle: 'Engineering practice benefits from research depth.',
    degree: 'Master of Computer Technology',
    researchLabel: 'Research interests',
    research: ['Artificial Intelligence', 'Optimization Algorithms', 'Large Language Models', 'Software Systems'],
    contactLabel: '06 / Collaboration',
    contactTitle: 'Let us turn an idea into a working product.',
    contactLead: 'Custom software, AI applications, enterprise systems, desktop software, systems integration, and technical consulting.',
    email: 'Email',
    github: 'GitHub',
    wechat: 'WeChat',
    qrTitle: 'Connect on WeChat',
    qrHint: 'Scan the QR code to add me',
    close: 'Close',
    footer: 'Engineering solutions for real problems.',
  },
} as const

