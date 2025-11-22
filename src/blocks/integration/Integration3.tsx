'use client';

// @mui
import Avatar from '@mui/material/Avatar';
import { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// Marquee
import Marquee from 'react-fast-marquee';

// Framer motion
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

/***************************  INTEGRATION - AVATAR  ***************************/

function IntegrationAvatar({ src }: { src: ImageCommonProps }) {
  const avatarSize = { xs: 52, sm: 68, md: 100 };
  const iconSize = { xs: 24, sm: 30, md: 45 };

  return (
    <Avatar
      variant="rounded"
      sx={{
        bgcolor: 'background.default',
        width: avatarSize,
        height: avatarSize,
        borderRadius: { xs: 4, md: 6 }
      }}
    >
      <GraphicsImage image={src} sx={{ width: iconSize, height: iconSize }} />
    </Avatar>
  );
}

/***************************  FLOATING ANIMATION WRAPPER  ***************************/

const FloatingAvatar = ({ src }: { src: string }) => (
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{
      duration: 2 + Math.random() * 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
  >
    <IntegrationAvatar src={src} />
  </motion.div>
);

/***************************  INTEGRATION  ***************************/
interface Props {
  headLine: string;
  captionLine: string;
  primaryBtn?: ButtonProps;
}

export default function Integration3({ headLine, captionLine }: Props) {
  const cardPadding = { xs: 3, sm: 4, md: 5 };

  const logos = [
    '/assets/images/integration/Web.png',
    '/assets/images/integration/Visa.png',
    '/assets/images/integration/UPay.png',
    '/assets/images/integration/tiktok.png',
    '/assets/images/integration/SteadFast.png',
    '/assets/images/integration/Rocket.png',
    '/assets/images/integration/RedX.png',
    '/assets/images/integration/Pathao.png',
    '/assets/images/integration/PaperFly.png',
    '/assets/images/integration/Nagad.png',
    '/assets/images/integration/MasterCard.png',
    '/assets/images/integration/KYC.png',
    '/assets/images/integration/Intregration.png',
    '/assets/images/integration/Google.png',
    '/assets/images/integration/GTM.png',
    '/assets/images/integration/GoogleAnalitcs.png',
    '/assets/images/integration/Gmail.png',
    '/assets/images/integration/Fraud.png',
    '/assets/images/integration/FBAd.png',
    '/assets/images/integration/Facebook.png',
    '/assets/images/integration/CKTF.png',
    '/assets/images/integration/Carrybee.png',
    '/assets/images/integration/Bkash.png',
    '/assets/images/integration/Bing.png'
  ];

  // const grouped = logos.reduce((rows: string[][], src: string, index) => {
  //   if (index % 2 === 0) rows.push([src]);
  //   else rows[rows.length - 1].push(src);
  //   return rows;
  // }, []);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <GraphicsCard>
          <Stack sx={{ alignItems: 'center', px: cardPadding, pt: cardPadding }}>
            <Stack
              sx={{
                alignItems: 'center',
                gap: { xs: 1, sm: 1.5 },
                maxWidth: { xs: 420, sm: '58%' },
                width: { xs: 'calc(100% - 10px)', md: '58%' }
              }}
            >
              {headLine && (
                <Typography align="center" variant="h2">
                  {headLine}
                </Typography>
              )}
              {captionLine && (
                <Typography align="center" sx={{ color: 'text.secondary' }}>
                  {captionLine}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Marquee gradient={false} speed={40} pauseOnHover={true} style={{ paddingTop: '20px', paddingBottom: '20px', marginTop: '20px' }}>
            <Stack direction="row" alignItems="center">
              {(() => {
                const pattern = [1, 2];
                let patternIndex = 0;
                let columns: string[][] = [];
                let i = 0;

                while (i < logos.length) {
                  const count = pattern[patternIndex];
                  const group = logos.slice(i, i + count);
                  columns.push(group);
                  i += count;
                  patternIndex = (patternIndex + 1) % pattern.length;
                }

                return columns.map((col, index) => (
                  <Stack key={index} direction="column" spacing={3} alignItems="center" justifyContent="center" sx={{ marginLeft: `` }}>
                    {col.map((src) => (
                      <FloatingAvatar key={src} src={src} />
                    ))}
                  </Stack>
                ));
              })()}
            </Stack>
          </Marquee>
        </GraphicsCard>
      </motion.div>
    </ContainerWrapper>
  );
}
