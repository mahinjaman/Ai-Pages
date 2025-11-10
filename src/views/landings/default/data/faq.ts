// @project
import branding from '@/branding.json';

export const faq = {
  heading: 'Frequently asked questions',
  caption: `Answers to common queries about ${branding.brandName}.`,
  defaultExpanded: 'Fees & Charges',
  faqList: [
    {
      question: `Do I need to buy a domain?`,
      answer: `No worries, you can start with a free StoreLine subdomain (like yourstore.storeline.io).
 And if you already have your own domain, you can easily connect it anytime.`,
      category: 'General'
    },
    {
      question: `Do I need my own hosting?`,
      answer: `Not at all. StoreLine is a serverless platform, meaning we handle all the hosting, speed, and security for you. You just focus on your business. We'll take care of the tech.`,
      category: 'General'
    },
    {
      question: `Can I customize my store design?`,
      answer: `Yes! You can choose from beautiful, ready-made templates and easily customize them. No coding needed. Change colors, fonts, and layouts to match your brand in just a few clicks.`,

      category: 'General'
    },
    {
      question: `Is StoreLine suitable for large businesses too?`,
      answer:
        'Definitely. StoreLine’s serverless technology automatically scales with your business. whether you have 10 or 10,000 customers. Small or big, we make sure your site always runs fast and smooth.',
      category: 'General'
    },
    {
      question: 'Can I use Bangladeshi payment methods and couriers?',
      answer: 'Absolutely. StoreLine is 100% Bangladesh-friendly. We support local payment gateways and courier partners, so you can manage orders and deliveries without any extra setup.',
      category: 'General'
    },
    {
      question: `Do I need any technical skills to use StoreLine?`,
      answer: 'Not at all! StoreLine is built for everyone even if you’ve never built a website before. You can launch and manage your online store easily with our simple dashboard.',

      category: 'General'
    },
    {
      question: `Will my StoreLine website rank on Google?`,
      answer:
        'Yes! Every StoreLine site is built with SEO best practices, fast loading, clean code, and easy meta control. You can customize your page titles, descriptions, and URLs to help your store rank higher on Google.',

      category: 'General'
    },

    {
      question: 'Can I track my visitors and sales?',
      answer:
        'Absolutely! StoreLine includes built-in server-side tracking for accurate data no extra setup needed. You’ll see your visitors, top products, and sales insights directly from your dashboard.',
      category: 'General'
    },
    {
      question: 'Can I connect Google Analytics or Facebook Pixel?',
      answer: `Yes! You can easily connect both with just a few clicks.
 And because StoreLine uses server-side tracking, your data stays accurate even with iOS privacy updates.`,

      category: 'General'
    },
    {
      question: 'Is my store safe and secure?',
      answer:
        '100%. StoreLine uses enterprise-grade security and encrypted connections for every store. You don’t need to worry about backups or updates we handle everything automatically.',

      category: 'General'
    }
  ],
  getInTouch: {
    link: { children: 'Get in Touch', href: branding.company.socialLink.support, target: '_blank', rel: 'noopener noreferrer' }
  },
  categories: ['General', 'Pricing & Licenses', 'Support & Updates'],
  activeCategory: 'General'
};
