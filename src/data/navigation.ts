export interface NavItem {
  label: string;
  href: string;
  labelZh?: string;
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/', labelZh: '首页' },
  { label: 'Projects', href: '/projects', labelZh: '项目' },
  { label: 'AI Collaboration', href: '/ai-collaboration', labelZh: 'AI 协作' },
  { label: 'Now', href: '/now', labelZh: '正在做' },
  { label: 'Reading', href: '/reading', labelZh: '阅读' },
  { label: 'Digital Footprints', href: '/digital-footprints', labelZh: '数字足迹' },
  { label: 'About', href: '/about', labelZh: '关于' },
];
