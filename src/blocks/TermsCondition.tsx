'use client';

import { Box, Container, Typography, Card, CardContent, Divider, Stack, Link } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import RuleIcon from '@mui/icons-material/Rule';
import SecurityIcon from '@mui/icons-material/Security';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PolicyIcon from '@mui/icons-material/Policy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LockIcon from '@mui/icons-material/Lock';
import WarningIcon from '@mui/icons-material/Warning';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BalanceIcon from '@mui/icons-material/Balance';

export default function TermsConditions() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6, px: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Terms & Conditions
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
          Effective Date: November 11, 2025
          <br />
          Please read these Terms carefully before using <strong>StoreLine.io</strong>.  
          By accessing or using our platform, you agree to abide by these terms and conditions.
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
            text="Welcome to StoreLine.io, a complete ready-to-use eCommerce solution for businesses in Bangladesh. These Terms & Conditions ('Terms') govern your use of our website, platform, and all related services provided by StoreLine.io. By creating an account or using our services, you agree to be bound by these Terms. If you do not agree, please discontinue use of our platform immediately."
          />

          <Section
            icon={<AssignmentIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Definitions"
            text={`“Platform” refers to the StoreLine.io website and all related applications, software, and tools.
“User”, “You”, or “Customer” refers to any individual or business using StoreLine.io services.
“We”, “Us”, or “Our” refers to StoreLine.io.
“Subscription” refers to your paid or trial access to StoreLine.io services.`}
          />

          <Section
            icon={<RuleIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Eligibility"
            text="To use StoreLine.io, you must be at least 18 years old, have the authority to enter into a binding agreement, and provide accurate and up-to-date information. We reserve the right to suspend or terminate any account that provides false information or violates our policies."
          />

          <Section
            icon={<AccountCircleIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Account Registration and Security"
            text="When you create an account on StoreLine.io, you must provide accurate contact and billing details. You are responsible for maintaining the confidentiality of your credentials. Notify us immediately if you suspect unauthorized access. StoreLine.io is not liable for any losses resulting from unauthorized access."
          />

          <Section
            icon={<PolicyIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Services Overview"
            text="StoreLine.io provides a cloud-based eCommerce SaaS platform enabling users to build, manage, and grow their online stores. Features include website builder, order management, analytics, and integrations with local payment gateways (Bkash, Nagad, etc.)."
          />

          <Section
            icon={<MonetizationOnIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Subscription, Payments, and Free Trial"
            text="StoreLine.io operates on a subscription model with payments in Bangladeshi Taka (BDT). New users receive a 14-day free trial. Subscription fees are billed in advance and are non-refundable except as stated in our Refund Policy."
          />

          <Section
            icon={<WarningIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Cancellations and Termination"
            text="You may cancel your subscription at any time via your dashboard or by contacting support. After cancellation, your account remains active until the billing cycle ends. We may suspend or terminate accounts that violate our Terms, engage in fraudulent activity, or fail to make timely payments."
          />

          <Section
            icon={<SecurityIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Acceptable Use Policy"
            text="You agree not to use the platform for illegal, fraudulent, or harmful purposes, including hosting haram or illegal products, uploading malware, infringing IP rights, or engaging in spamming or phishing. Violations may result in immediate termination without refund."
          />

          <Section
            icon={<GavelIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Intellectual Property"
            text="All content, software, and trademarks on StoreLine.io are owned by StoreLine or its licensors. You are granted a limited, non-transferable license to use the platform. Copying, modifying, or reverse-engineering our software is prohibited."
          />

          <Section
            icon={<IntegrationInstructionsIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Third-Party Services and Integrations"
            text="StoreLine.io integrates with third-party tools such as payment gateways, delivery, and analytics. We do not control or guarantee third-party services. Your use of them is subject to their respective terms and privacy policies."
          />

          <Section
            icon={<LockIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Data Protection and Privacy"
            text="We handle all personal information per our Privacy Policy. By using StoreLine.io, you consent to our collection and processing of your data as described there."
          />

          <Section
            icon={<PolicyIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Disclaimer of Warranties"
            text="StoreLine.io is provided 'as is' and 'as available.' We make no guarantees of uninterrupted service and disclaim all warranties, express or implied, to the fullest extent permitted by law."
          />

          <Section
            icon={<BalanceIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Limitation of Liability"
            text="StoreLine.io shall not be liable for indirect, incidental, or consequential damages including data loss or downtime. Our total liability is limited to the amount paid by you for the previous month of service."
          />

          <Section
            icon={<SecurityIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Indemnification"
            text="You agree to indemnify and hold harmless StoreLine.io and its affiliates from any claims or damages resulting from your violation of these Terms or misuse of our platform."
          />

          <Section
            icon={<PolicyIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Modifications to the Terms"
            text="We may update or modify these Terms at any time. Updated Terms will be posted with a new 'Last Updated' date. Continued use indicates your acceptance of the revised Terms."
          />

          <Section
            icon={<LanguageIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Governing Law and Jurisdiction"
            text="These Terms are governed by and construed under the laws of Bangladesh. All disputes shall be resolved exclusively in Dhaka courts."
          />

          <Section
            icon={<ContactMailIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Contact Information"
            text={`📧 Email: info@storeline.io
📞 Phone: +8801607404085
🏢 Address: Dhaka Uddan Abasik Avenue, 43/A Haji Dil Mohammad Ave, 1207, Bangladesh.`}
          />
        </Stack>
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
