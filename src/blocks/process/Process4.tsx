'use client';

import { useEffect, useState } from 'react';

import { alpha, useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { ThemeDirection } from '@/config';
import { SECTION_COMMON_PY } from '@/utils/constant';

const autoChangeInterval = 5000;

function TimelineCard({ cards, isTimeline, activeStep, handleStep }: any) {
  return (
    <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 }, p: 0, mb: 0, mt: { xs: 4, sm: 0 } }}>
      {cards.map((card: any, index: number) => (
        <Box key={index} onClick={() => handleStep(index)}>
          <TimelineItem sx={{ cursor: 'pointer', color: activeStep == index ? 'primary.main' : 'inherit' }}>
            {isTimeline && (
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: activeStep == index ? 'primary.lighter' : 'grey.100',
                    boxShadow: 'none',
                    p: { xs: 1.25, sm: 2 },
                    borderRadius: 4,
                    my: 0.25,
                    '&:hover': { bgcolor: 'grey.200' }
                  }}
                >
                  <SvgIcon {...(typeof card.icon === 'string' ? { name: card.icon } : { ...card.icon })} />
                </TimelineDot>
                {cards.length - 1 !== index && <TimelineConnector />}
              </TimelineSeparator>
            )}
            <TimelineContent sx={{ py: 0, ...(cards.length - 1 !== index && { pb: { xs: 4, sm: 6 } }) }}>
              <Stack sx={{ gap: 1 }}>
                <Typography variant="h4">{card.title}</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </Stack>
            </TimelineContent>
          </TimelineItem>
        </Box>
      ))}
    </Timeline>
  );
}

export default function Process4({ heading, caption, cards, isTimeline = true }: any) {
  const theme = useTheme();
  const grey100 = theme.palette.grey[100];

  const gradient =
    theme.direction === ThemeDirection.RTL
      ? `radial-gradient(78.19% 21.81% at 50% 50%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`
      : `radial-gradient(78.19% 78.19% at 50% 50%, ${alpha(grey100, 0)} 0%, ${grey100} 100%)`;

  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStep = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % cards.length);
    }, autoChangeInterval);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { textAlign: 'center' } },
            captionProps: { sx: { maxWidth: 700, mx: 'auto' } }
          }}
        />

        <Grid
          container
          spacing={{ sm: 2, md: 3 }}
          sx={{
            display: { xs: 'inline-block', sm: 'flex' }
          }}
        >
          <Grid size={{ xs: 12, sm: 6 }}>
            <GraphicsCard sx={{ height: { xs: 300, sm: 400, md: 420 } }}>
              <GraphicsImage
                image={cards[activeStep].image}
                sx={{
                  width: 1,
                  height: 1,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: { xs: 'cover', sm: 'contain' },
                  backgroundPosition: { xs: 'center', sm: 'top' },
                  transform: { xs: 'scale(1)', sm: 'scale(1)', md: 'scale(1.25)' },
                  backgroundPositionX: { sm: '-25%', md: '20%' }
                }}
              >
                <Box sx={{ height: 1, background: gradient }} />
              </GraphicsImage>
            </GraphicsCard>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Stack direction="row" sx={{ alignItems: 'center', height: 1 }}>
              <TimelineCard cards={cards} isTimeline={isTimeline} activeStep={activeStep} handleStep={handleStep} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}
