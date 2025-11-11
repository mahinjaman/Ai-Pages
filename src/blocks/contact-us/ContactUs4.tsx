'use client';

import { motion } from 'framer-motion';
import { Avatar, Box, Button, Card, Container, Grid, Stack, TextField, Typography, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SendIcon from '@mui/icons-material/Send';

function InfoCard({ icon, label, value, link }: { icon: React.ReactNode; label: string; value: string; link?: string }) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
      <Card
        sx={{
          p: 3,
          borderRadius: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          bgcolor: '#fff',
          boxShadow: '0 4px 14px rgba(0,0,0,0.06)'
        }}
      >
        <Avatar sx={{ bgcolor: 'primary.main', width: 48, height: 48 }}>{icon}</Avatar>
        <Box>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {label}
          </Typography>
          {link ? (
            <Link href={link} target="_blank" rel="noopener" underline="hover" sx={{ display: 'block', fontWeight: 600, mt: 0.3 }}>
              {value}
            </Link>
          ) : (
            <Typography variant="h6" sx={{ fontWeight: 600, mt: 0.3 }}>
              {value}
            </Typography>
          )}
        </Box>
      </Card>
    </motion.div>
  );
}

function ContactForm() {
  return (
    <Card
      elevation={6}
      sx={{
        p: { xs: 3, sm: 5 },
        borderRadius: 4,
        bgcolor: '#fff',
        boxShadow: '0 8px 20px rgba(0,0,0,0.06)'
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
        Send us a message
      </Typography>
      <Stack spacing={2.5}>
        <TextField label="Full Name *" fullWidth required />
        <TextField label="Email Address *" fullWidth type="email" required />
        <TextField label="Subject" fullWidth />
        <TextField label="Message *" fullWidth multiline rows={4} required />
        <Button size="large" variant="contained" endIcon={<SendIcon />} sx={{ borderRadius: 3, fontWeight: 600 }}>
          Send Message
        </Button>
      </Stack>
    </Card>
  );
}

export default function ContactUs4() {
  return (
    <Box sx={{ backgroundColor: '#F9FAFB' }}>
      {/* ✅ Hero Section Fixed */}
      <Box
        sx={{
          textAlign: 'center',
          py: { xs: 10, md: 14 },
          background: 'linear-gradient(120deg, #5D3FD3 0%, #7F56DA 100%)',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.3 }}>
              Get in Touch with StoreLine.io
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              We’re here to help you build, launch, and grow your online business with ease.
            </Typography>
          </motion.div>
        </Container>

        {/* Decorative subtle wave transition */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -40,
            left: 0,
            right: 0,
            height: 80,
            backgroundColor: '#F9FAFB',
            borderTopLeftRadius: '50% 20%',
            borderTopRightRadius: '50% 20%'
          }}
        />
      </Box>

      {/* ✅ Contact Section */}
      <Container maxWidth="lg" sx={{ mt: { xs: -5, md: -8 }, pb: 10, position: 'relative' }}>
        <Card
          sx={{
            borderRadius: 4,
            p: { xs: 3, sm: 5, md: 6 },
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            background: '#fff'
          }}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <ContactForm />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <InfoCard icon={<WhatsAppIcon />} label="WhatsApp" value="+8801607404085" link="https://wa.me/8801607404085" />
                <InfoCard icon={<PhoneIcon />} label="Call" value="+8801607404085" link="tel:+8801607404085" />
                <InfoCard icon={<EmailIcon />} label="Email" value="info@storeline.io" link="mailto:info@storeline.io" />
                <InfoCard
                  icon={<LocationOnIcon />}
                  label="Address"
                  value="Dhaka Uddan Abasik Avenue, 43/A Haji Dil Mohammad Ave, 1207, Bangladesh"
                  link="https://goo.gl/maps/abcd"
                />
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
