'use client';

import { Box, Container, Typography, Card, CardContent, Divider, Stack, Link } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import RuleIcon from '@mui/icons-material/Rule';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PolicyIcon from '@mui/icons-material/Policy';
import GavelIcon from '@mui/icons-material/Gavel';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import WarningIcon from '@mui/icons-material/Warning';

export default function RefundPolicy() {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 6, md: 10 } }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 6, px: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Refund Policy
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
          Last Updated: November 11, 2025
          <br />
          We value your satisfaction and aim to make every refund request fair and transparent.
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
              <strong>Email:</strong> <Link href="mailto:info@storeline.io">info@storeline.io</Link>
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> <Link href="tel:+8801607404085">+8801607404085</Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Sections */}
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Section
            icon={<InfoIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Overview"
            text="At StoreLine.io, customer satisfaction is our top priority. We aim to ensure that every merchant and business owner using our platform has a seamless experience. If you are not fully satisfied with your subscription or encounter technical issues that prevent you from using our service effectively, you may be eligible for a full refund within 14 days of your purchase or activation date. Our refund process is designed to be transparent, fair, and hassle-free."
          />

          <Section
            icon={<RuleIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Eligibility for Refund"
            text={`You may request a refund under the following conditions:
- The refund request is made within 14 calendar days of purchase or renewal.
- You have encountered a technical problem that StoreLine failed to resolve within a reasonable time.
- You accidentally subscribed to the wrong plan and have not yet used the service features.
- Your payment was processed more than once (duplicate payment).

Refund requests will not be approved if:
- The 14-day period has passed since purchase.
- You have actively used the platform or built a store beyond the trial features.
- You violated our Terms of Service.
- The issue arises from third-party integrations (e.g., payment gateways, courier APIs).
- The refund request is made for non-technical reasons such as change of mind or business closure.`}
          />

          <Section
            icon={<HourglassBottomIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Free Trial Policy"
            text="All new StoreLine users are entitled to a 14-day free trial before being charged for a subscription. After the trial period, charges will apply automatically unless you cancel before your trial ends. Since the trial period allows you to evaluate the platform, refunds are typically not applicable once the trial has expired and a paid subscription has begun — except for technical or billing issues as stated above."
          />

          <Section
            icon={<ContactMailIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Refund Request Process"
            text={`To submit a refund request, please contact us via email or phone:
📧 Email: info@storeline.io
📞 Phone: +8801607404085

When requesting a refund, please include:
- Your registered name and email address
- Subscription plan and payment date
- Transaction reference number (if available)
- A brief explanation of the issue

Once received:
- Our billing team will review your request within 2–3 business days.
- If approved, refunds will be processed within 5–7 business days via the same payment method (Bkash, Nagad, card, etc.).`}
          />

          <Section
            icon={<MonetizationOnIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Partial Refunds"
            text={`Partial refunds may be granted in cases such as:
- Plan upgrade or downgrade within the 14-day window.
- Partial duplicate transaction.
- Service outage or technical fault significantly affecting your account.

Partial refund eligibility is determined by our billing team after review.`}
          />

          <Section
            icon={<WarningIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Non-Refundable Items & Situations"
            text={`Refunds cannot be issued for:
- Subscription renewals made after the free trial period has expired.
- Accounts suspended or terminated for violating StoreLine policies.
- Custom services (e.g., setup assistance, design work, add-on development).
- Promotional discounts or lifetime deals.`}
          />

          <Section
            icon={<GavelIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Processing Time & Method"
            text="Approved refunds are processed through the same payment channel used during purchase. The refund typically appears within 5–7 business days, depending on your payment provider. If not received within 10 business days, please contact our support team for assistance."
          />

          <Section
            icon={<ContactMailIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Contact Information"
            text={`For any billing or refund-related queries, contact our support team 24/7:
📧 Email: info@storeline.io
📞 Phone: +8801607404085
🏢 Address: Dhaka Uddan Abasik Avenue, 43/A Haji Dil Mohammad Ave, 1207, Bangladesh`}
          />

          <Section
            icon={<PolicyIcon color="primary" sx={{ fontSize: 36 }} />}
            title="Final Note"
            text="By subscribing to StoreLine.io, you acknowledge that you have read, understood, and agree to this Refund Policy. We reserve the right to update or modify this policy at any time, and such changes will be posted with an updated 'Last Updated' date. Thank you for trusting StoreLine.io — your partner for a complete ready-to-use eCommerce solution in Bangladesh."
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
        '&:hover': { boxShadow: 6, transform: 'translateY(-3px)', transition: '0.3s ease' }
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
