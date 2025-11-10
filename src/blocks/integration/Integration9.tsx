'use client';

// @mui
import { alpha } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import Slider, { Settings } from 'react-slick';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { TagProps } from '@/types/integration';

interface Props {
  headLine: string;
  captionLine: string;
  tagList: TagProps[];
  primaryBtn: ButtonProps;
}

const overlayStyle = { position: 'absolute', left: 0, right: 0, height: { xs: 76, sm: 135 }, zIndex: 2 };

/***************************  INTEGRATION - TAG  ***************************/

function IntegrationTag({ label, icon }: TagProps) {
  const iconSize = { xs: 28, md: 40, sm: 30 };

  return (
    <Chip
      label={label}
      {...(icon && { icon: <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} stroke={1} color="inherit" /> })}
      slotProps={{ label: { sx: { p: 0, ...(icon && { pl: 1.25 }), typography: 'h5' } } }}
      sx={{
        pl: 3,
        py: { xs: 2, sm: 2.5 },
        '& svg': { width: iconSize, height: iconSize },
        bgcolor: 'grey.100',
        width: 1,
        justifyContent: 'start'
      }}
    />
  );
}

/***************************  INTEGRATION - 9  ***************************/

export default function Integration9({ headLine, captionLine, tagList, primaryBtn }: Props) {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={{ xs: 2, md: 15.25 }}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack
            sx={{ justifyContent: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' }, gap: { xs: 3, sm: 4 } }}
          >
            <Typeset heading={headLine} caption={captionLine} captionProps={{ variant: 'body1' }} />
            <Button variant="contained" {...primaryBtn} sx={{ width: 'fit-content', mx: { xs: 'auto', md: 0 }, ...primaryBtn.sx }} />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 8, md: 5 }}>
          <Box sx={{ position: 'relative', '& .slick-vertical .slick-slide': { border: 'none' } }}>
            <Box
              sx={(theme) => ({
                ...overlayStyle,
                top: 0,
                background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${alpha(theme.palette.background.default, 0)})`
              })}
            />
            <Box
              sx={(theme) => ({
                ...overlayStyle,
                bottom: 0,
                background: `linear-gradient(to top, ${theme.palette.background.default}, ${alpha(theme.palette.background.default, 0)})`
              })}
            />
            <Slider {...settings}>
              {tagList.map((integration, index) => (
                <Box key={index} sx={{ py: { xs: 0.5, sm: 0.75 } }}>
                  <IntegrationTag {...integration} />
                </Box>
              ))}
            </Slider>
          </Box>
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}
