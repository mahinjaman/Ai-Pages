'use client';

import { useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

// @third-party
import { motion } from 'framer-motion';

// @project
import AnimatedModal from '@/components/AnimatedModal';
import { GraphicsCard, ModalCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconType } from '@/enum';

interface Props {
  heading: string;
  caption: string;
  video: { thumbnail: string; src: string; overlay?: boolean };
}

/***************************  SMALL HERO - 8  ***************************/

/**
 *
 * Demos:
 * - [SmallHero8](https://www.saasable.io/blocks/small-hero/small-hero8)
 */

export default function SmallHero8({ heading, caption, video }: Props) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);

  const blurEffect = {
    bgcolor: alpha(theme.palette.grey[700], 0.3),
    backdropFilter: 'blur(5.5px)'
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <GraphicsCard
            bgImage={video.thumbnail}
            sx={{ minHeight: { xs: 280, md: 558, sm: 418 }, cursor: 'pointer', position: 'relative' }}
            onClick={() => setOpen(true)}
          >
            <Stack
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: 64, sm: 84 },
                height: { xs: 64, sm: 84 },
                borderRadius: 67,
                justifyContent: 'center',
                alignItems: 'center',
                ...blurEffect
              }}
            >
              <SvgIcon name="tabler-filled-player-play" size={40} color="common.white" type={IconType.FILL} />
            </Stack>
          </GraphicsCard>
        </motion.div>
      </Stack>

      <AnimatedModal open={open} onClose={() => setOpen(false)}>
        <ModalCard sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, height: 'auto', bgcolor: 'transparent' }}>
          <video playsInline width="100%" height="100%" style={{ display: 'flex', objectFit: 'cover' }} controls autoPlay>
            <source src={video.src} type="video/mp4" />
            <track src="captions.vtt" kind="captions" srcLang="en" label="English captions" />
          </video>
        </ModalCard>
      </AnimatedModal>
    </ContainerWrapper>
  );
}
