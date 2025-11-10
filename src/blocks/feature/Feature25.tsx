'use client';

import { SyntheticEvent, useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button, { ButtonProps } from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @tpyes
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';

// @assets
import GraphicsImage from '@/components/GraphicsImage';

interface TopicsProps {
  icon: SpriteIconProps;
  title: string;
  description?: string;
  image: ImageCommonProps;
  actionBtn?: ButtonProps;
}

interface Props {
  heading: string;
  caption?: string;
  topics: TopicsProps[];
}

/***************************  FEATURE - 25  ***************************/

/**
 *
 * Demos:
 * - [Feature25](https://www.saasable.io/blocks/feature/feature25)
 *
 * API
 * - [Feature25 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/feature/feature25#props-details)
 */

export default function Feature25({ heading, caption, topics }: Props) {
  const theme = useTheme();
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const [value, setValue] = useState<string>('2');

  // Handle tab change
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        <Typeset
          {...{
            heading,
            caption,
            stackProps: { sx: { maxWidth: { sm: 600, md: 740 } } }
          }}
        />
        <Stack sx={{ gap: { xs: 1.5, sm: 2, md: 2.5 }, alignItems: 'center' }}>
          <TabContext value={value}>
            <GraphicsCard sx={{ width: { xs: 1, sm: 'unset' }, bgcolor: 'unset', border: '1px solid', borderColor: 'grey.300' }}>
              <Box sx={{ p: 0.25 }}>
                <TabList
                  onChange={handleChange}
                  sx={{
                    '& .MuiTabs-indicator': { display: 'none' },
                    minHeight: 'unset',
                    p: 0.25,
                    '& .MuiTabs-flexContainer': { gap: 0.25 }
                  }}
                  variant="scrollable"
                >
                  {topics.map((item, index) => (
                    <Tab
                      label={item.title}
                      disableFocusRipple
                      icon={
                        <SvgIcon
                          {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                          size={downMD ? 18 : 22}
                          color="text.secondary"
                        />
                      }
                      value={String(index + 1)}
                      key={index}
                      iconPosition="start"
                      tabIndex={0}
                      sx={{
                        minHeight: 44,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'transparent',
                        fontSize: { xs: 12, md: 14 },
                        fontWeight: 600,
                        '& svg ': { mr: 1 },
                        '&.Mui-selected': {
                          bgcolor: 'grey.100',
                          color: 'text.primary',
                          '& svg': { stroke: 'text.primary' }
                        },
                        '&.Mui-focusVisible': { bgcolor: 'grey.300' },
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    />
                  ))}
                </TabList>
              </Box>
            </GraphicsCard>
            {topics.map((item, index) => (
              <TabPanel value={String(index + 1)} key={index} sx={{ p: 0, width: 1 }}>
                <GraphicsCard sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <Grid container spacing={{ xs: 2.5, sm: 1.5, md: 3 }}>
                    <Grid size={{ xs: 12, sm: 5 }}>
                      <GraphicsCard sx={{ bgcolor: 'grey.300', height: { xs: 295, sm: 298, md: 400 } }}>
                        <GraphicsImage sx={{ height: 1 }} image={item.image} />
                      </GraphicsCard>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 7 }}>
                      <Stack
                        sx={{
                          justifyContent: 'center',
                          gap: { xs: 4, md: 5 },
                          height: 1,
                          px: { sm: 2, md: 2.5 },
                          alignItems: { sm: 'flex-start' }
                        }}
                      >
                        <Stack sx={{ gap: 1.5 }}>
                          <Typography variant="h3">{item.title}</Typography>
                          {item.description && <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>}
                        </Stack>
                        {item.actionBtn && <Button variant="contained" color="primary" {...item.actionBtn} />}
                      </Stack>
                    </Grid>
                  </Grid>
                </GraphicsCard>
              </TabPanel>
            ))}
          </TabContext>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
