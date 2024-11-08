import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: 'https://onpage.ai',
    },
      {
        text: 'Pricing',
        href: 'pricing/',
      },
    {
      text: 'Blog',
      href: '/blog/',
    },
    {
      text: 'Support',
      href: '/contact/',
    },
    {
      text: 'Terms',
      href: '/terms/',
    },
  ],
  actions: [{ text: 'Download', href: 'https://chromewebstore.google.com/detail/onpageai-seo-content-mana/ipeelalodbhkaoplodaaffepgaodpidh', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: 'pricing/' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Video Tutorial', href: 'https://www.youtube.com/channel/UCa00gZqaSLlGBaJ6Wh9YHmQ?sub_confirmation=1' },
        { text: 'Community Forum', href: 'https://www.facebook.com/groups/onpage' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/similarcontent' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/groups/onpage' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="http://localhost:4321/assets/images/icon32.png" alt="Onpage logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onpage.ai/"> Onpage.AI</a> · All rights reserved.
  `,
};