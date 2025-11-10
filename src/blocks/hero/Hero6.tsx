'use client';

import { useEffect, useRef, useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import Button, { ButtonProps } from '@mui/material/Button';
import Chip, { ChipProps } from '@mui/material/Chip';
import Link, { LinkProps } from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { throttle } from 'lodash-es';
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { ImageCommonProps } from '@/types/graphics';

interface Props {
  chip?: {
    label: ChipProps['label'];
    link?: LinkProps;
  };
  heading: string;
  caption: string;
  primaryBtn: ButtonProps;
  secondaryBtn: ButtonProps;
  images: ImageCommonProps[];
}

/***************************  HERO - 6  ***************************/

/**
 *
 * Demos:
 * - [Hero6](https://www.saasable.io/blocks/hero/hero6)
 *
 * API:
 * - [Hero6 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/hero/hero6#props-details)
 */

export default function Hero6({ chip, heading, caption, primaryBtn, secondaryBtn, images }: Props) {
  const sliderRef = useRef<Slider | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0); // To track current slide
  const totalSlides = images.length - 1; // Total number of slides (adjust based on the number of slides)

  const settings: Settings = {
    autoplay: false,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    swipe: false,
    centerMode: true,
    initialSlide: 2,
    variableWidth: true,
    afterChange: (index) => setCurrentSlide(index)
  };

  useEffect(() => {
    const handleScroll = throttle((event: WheelEvent) => {
      event.preventDefault(); // Prevent the default window scroll

      if (sliderRef.current) {
        const deltaY = event.deltaY;

        // Scroll down if scrolling down and not on the last slide
        if (deltaY > 0 && currentSlide < totalSlides - 1) {
          sliderRef.current.slickNext(); // Scroll down
        }
        // Scroll up if scrolling up and not on the first slide
        else if (deltaY < 0 && currentSlide > 0) {
          sliderRef.current.slickPrev(); // Scroll up
        }
      }
    }, 200);

    const sliderElement = sliderRef.current?.innerSlider?.list; // Access the slider's inner list
    if (sliderElement) {
      // Attach the wheel event to the slider's inner list
      sliderElement.addEventListener('wheel', handleScroll, { passive: false });
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, [currentSlide, totalSlides]);

  return (
    <Box sx={{ py: SECTION_COMMON_PY }}>
      <ContainerWrapper>
        <Stack sx={{ alignItems: 'center' }}>
          {chip && (
            <Chip
              label={
                typeof chip.label === 'string' ? (
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {chip.label}
                    {chip.link && <Link component={NextLink} variant="caption" color="primary.main" {...chip.link} />}
                  </Typography>
                ) : (
                  chip.label
                )
              }
              sx={{ bgcolor: 'grey.100', mb: 2 }}
            />
          )}
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { textAlign: 'center', alignItems: 'center', gap: { xs: 2, md: 3 } } },
              headingProps: { variant: 'h1', sx: { maxWidth: { xs: 350, sm: 500, md: 709 } } },
              captionProps: { sx: { maxWidth: { xs: 343, md: 500 } } }
            }}
          />
          <Stack direction="row" sx={{ justifyContent: 'center', gap: { xs: 1, sm: 2, md: 2.5 }, mt: 4 }}>
            {primaryBtn && <Button color="primary" size="large" variant="contained" {...primaryBtn} />}
            {secondaryBtn && <Button color="primary" size="large" variant="outlined" {...secondaryBtn} />}
          </Stack>
        </Stack>
      </ContainerWrapper>
      <Stack sx={{ width: 1, mt: { xs: 4, md: 6 }, cursor: 'all-scroll' }}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((item, index) => (
            <Box key={index} sx={{ height: { xs: 216, sm: 478 }, px: 0.75 }}>
              <GraphicsImage
                {...{ image: item }}
                sx={{ height: 1, width: { xs: 162, sm: 300 }, backgroundPosition: 'top', borderRadius: { xs: 6, sm: 8, md: 10 } }}
              />
            </Box>
          ))}
        </Slider>
      </Stack>
    </Box>
  );
}
