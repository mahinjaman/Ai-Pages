// @project
import { pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { PAGE_PATH, BUY_NOW_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/
const linkProps = { target: '_blank', rel: 'noopener noreferrer' };

const navItems = [
  { id: 'home', title: 'Home', link: '/' },
  { id: 'features', title: 'Features', link: PAGE_PATH.featuresPage },
  { id: 'pricing', title: 'Pricing', link: PAGE_PATH.pricingPage },
  { id: 'templates', title: 'Templates', link: PAGE_PATH.templatesPage },
  pagesMegamenu,
];

export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-user" color="primary.main" size={18} />,
    href: FREEBIES_URL,
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Get Started', href: BUY_NOW_URL, ...linkProps },
  animated: true,
  navItems
};
