'use client';

import { Box, Container, Typography, Card, CardContent, Divider, Stack, Link } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import GavelIcon from '@mui/icons-material/Gavel';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LanguageIcon from '@mui/icons-material/Language';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LockIcon from '@mui/icons-material/Lock';
import CookieIcon from '@mui/icons-material/Cookie';

export default function PrivacyPolicy() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6, px: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Privacy Policy
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
          Effective Date: November 11, 2025
          <br />
          We value your privacy and are committed to protecting your personal data when using <strong>StoreLine.io</strong>.
        </Typography>
      </Box>

      {/* Company Info */}
      <Container maxWidth="md" sx={{ mb: 6 }}>
        <Card variant="outlined" sx={{ borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Company Information
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Company:</strong> StoreLine.io
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Website:</strong>{' '}
              <Link href="https://storeline.io" target="_blank" rel="noopener noreferrer">
                https://storeline.io
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Email:</strong>{' '}
              <Link href="mailto:info@storeline.io">info@storeline.io</Link>
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong>{' '}
              <Link href="tel:+8801607404085">+8801607404085</Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Sections */}
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Section
            icon={<InfoIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Introduction"
            text="Welcome to StoreLine.io — a complete ready-to-use eCommerce solution for businesses in Bangladesh. Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and share your personal information when you visit or use our website and services. By using StoreLine.io, you agree to the terms of this Privacy Policy."
          />

          <Section
            icon={<DataUsageIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Information We Collect"
            text={`We collect personal and non-personal information to provide and improve our services.
- Personal Information: name, business name, email, phone, billing details (Bkash, Nagad, card), and login credentials.
- Automatically Collected: device, browser, IP, pages viewed, cookies, referral sources.
- Third-Party Data: analytics (Google), advertising (Facebook Pixel), and payment verification info.`}
          />

          <Section
            icon={<PolicyIcon color="primary" sx={{ fontSize: 36 }} />}
            title="How We Use Your Information"
            text={`We use your information to:
- Create and manage your StoreLine account
- Process subscriptions, payments, and refunds
- Communicate updates, offers, or alerts
- Improve our services and detect fraud
- Analyze usage data for optimization
- Comply with legal and financial obligations`}
          />

          <Section
            icon={<CloudIcon color="primary" sx={{ fontSize: 36 }} />}
            title="How We Share Your Information"
            text={`We never sell or trade your data. Limited information may be shared only with trusted third parties:
- Payment processors
- Analytics and advertising partners (Google, Meta)
- Customer support systems
- Hosting and infrastructure providers
These parties maintain confidentiality and use your data only for service delivery.`}
          />

          <Section
            icon={<CookieIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Cookies and Tracking Technologies"
            text={`We use cookies to enhance your browsing experience.
Cookies help us:
- Remember preferences
- Keep you logged in securely
- Analyze website performance
- Personalize user experience

You can disable cookies via browser settings, though some features may stop working properly.`}
          />

          <Section
            icon={<LockIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Data Security"
            text={`We use industry-standard protection:
- SSL encryption
- Encrypted password storage
- Restricted access to authorized personnel
- Regular vulnerability monitoring
No system is 100 % secure, but we take all necessary precautions.`}
          />

          <Section
            icon={<StorageIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Data Retention"
            text="We retain your personal data only as long as needed to provide our services, comply with legal obligations, and resolve disputes. After account closure, essential records such as invoices may be kept for accounting purposes."
          />

          <Section
            icon={<FingerprintIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Your Rights and Choices"
            text={`You have the right to:
- Access your stored data
- Correct inaccurate information
- Request account deletion
- Opt-out of marketing emails
To exercise these rights, contact us at info@storeline.io.`}
          />

          <Section
            icon={<LanguageIcon color="primary" sx={{ fontSize: 36 }} />}
            title="International Data Transfers"
            text="StoreLine.io is based in Bangladesh. If you use our services from another country, your data will be processed and stored in Bangladesh under local data protection laws, which may differ from those in your jurisdiction."
          />

          <Section
            icon={<SecurityIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Children’s Privacy"
            text="We do not knowingly collect data from individuals under 18 years. If any such data is discovered, it will be deleted immediately."
          />

          <Section
            icon={<GavelIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Policy Updates"
            text="We may update this Privacy Policy periodically to reflect new practices or legal requirements. Updated versions will include a new 'Last Updated' date. Please review this policy periodically."
          />

          <Section
            icon={<ContactMailIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Contact Us"
            text={`For any privacy-related concerns, reach us at:
📧 Email: info@storeline.io
📞 Phone: +8801607404085
🏢 Address: Dhaka Uddan Abasik Avenue, 43/A Haji Dil Mohammad Ave, 1207, Bangladesh`}
          />
        </Stack>
      </Container>

      {/* Footer */}
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
        <Divider sx={{ mb: 3 }} />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          By using StoreLine.io, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
        </Typography>
      </Container>
    </Box>
  );
}

/*  REUSABLE SECTION COMPONENT  */
function Section({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 3,
        p: { xs: 2.5, md: 3 },
        '&:hover': { boxShadow: 6, transform: 'translateY(-3px)', transition: '0.3s ease' },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
        {icon}
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Stack>
      <Typography variant="body1" sx={{ color: 'text.secondary', whiteSpace: 'pre-line' }}>
        {text}
      </Typography>
    </Card>
  );
}
