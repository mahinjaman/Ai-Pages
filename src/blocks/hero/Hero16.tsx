'use client';

import { useEffect, useRef, useState } from 'react';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GetImagePath from '@/utils/GetImagePath';
import { GraphicsCard } from '@/components/cards';
import { ProfileGroup2 } from '@/components/cards/profile-card';
import { SECTION_COMMON_PY } from '@/utils/constant';
import Typeset from '@/components/Typeset';

// @types
import { ImageComponentProps } from '@/types/graphics';

interface Props {
  reviewData: {
    avatarList: string[];
    rating: number;
    totalReviews: string;
  };
  heading: string;
  caption?: string;
  secondaryBtn?: ButtonProps;
  poster: ImageComponentProps;
  videoSrc: string;
}

/***************************  HERO - 16  ***************************/

/**
 *
 * Demos:
 * - [Hero16](https://www.saasable.io/blocks/hero/hero16)
 *
 * API:
 * - [Hero16 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/hero/hero16#props-details)
 */

export default function Hero16({ reviewData, heading, caption, secondaryBtn, poster, videoSrc }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6 // Adjust threshold as needed
    };

    // Handle video play/pause based on intersection with the viewport
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoElement && !isPlaying) {
            videoElement
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.error('Autoplay was prevented:', error);
              });
          }
        } else {
          if (videoElement && isPlaying) {
            videoElement.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const videoElement = videoRef.current;

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, [isPlaying]);

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ justifyContent: 'center', gap: 3 }}>
        <ProfileGroup2 {...reviewData} starColor="primary.main" />
        <Stack direction={{ md: 'row' }} sx={{ width: 1, justifyContent: 'space-between', alignItems: { xs: 'start', md: 'end' }, gap: 3 }}>
          <Typeset
            {...{
              heading,
              caption,
              headingProps: { variant: 'h1', sx: { maxWidth: { xs: 350, sm: 500, md: 709 } } },
              captionProps: { sx: { maxWidth: { xs: 343, md: 500 } } }
            }}
          />
          <Button color="primary" size="large" variant="outlined" {...secondaryBtn} sx={{ minWidth: 194 }} />
        </Stack>
      </Stack>
      <GraphicsCard sx={{ mt: 4 }}>
        <video
          playsInline
          ref={videoRef}
          width="100%"
          height="100%"
          style={{ maxHeight: '691px', display: 'flex', objectFit: 'cover' }}
          controls
          preload="metadata"
          poster={GetImagePath(poster)}
          autoPlay={false}
          loop={false}
          muted={true}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </GraphicsCard>
    </ContainerWrapper>
  );
}
