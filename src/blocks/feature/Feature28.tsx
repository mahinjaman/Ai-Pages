'use client';

// @mui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard, IconCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import { IconCardProps } from '@/types/feature';
import { ImageCommonProps } from '@/types/graphics';
import { SpriteIconProps } from '@/types/icon';
import { ButtonProps } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import SvgIcon from '@/components/SvgIcon';
import { SyntheticEvent, useState } from 'react';

interface FeatureListProps {
  primary: string;
}

interface TopicsProps {
  icon: SpriteIconProps;
  title: string;
  title2: string;
  description?: string;
  image: ImageCommonProps;
  isCoverImage?: boolean;
  isImageBorder?: boolean;
  list?: FeatureListProps[];
  actionBtn?: ButtonProps;
  actionBtn2?: ButtonProps;
}

interface Props {
  heading: string;
  caption?: string;
  image?: ImageCommonProps;
  showBorder?: boolean;
  features: IconCardProps[];
  topics: TopicsProps[];
}

/***************************  FEATURE - 11  ***************************/

/**
 *
 * Demos:
 * - [Feature11](https://www.saasable.io/blocks/feature/feature11)
 *
 * API
 * - [Feature11 API](https://phoenixcoded.gitbook.io/saasable/ui-kit/development/components/feature/feature11#props-details)
 */

export default function Feature28({ heading, caption, image, features, showBorder = true, topics }: Props) {
  const imagePadding = { xs: 3, sm: 4, md: 5 };
  const iconProps = { type: IconType.CUSTOM };

  const [value, setValue] = useState<string>('1');

  // Handle tab change
  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.3,
            delay: 0.3
          }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center', textAlign: 'center', maxWidth: { sm: 470, md: 615 }, mx: 'auto' } }
            }}
          />
        </motion.div>
        <Stack sx={{ gap: 1.5, alignItems: 'center' }}>
          <TabContext value={value}>
            <GraphicsCard sx={{ width: { xs: 1, sm: 'unset' } }}>
              <Box sx={{ p: 0.25 }}>
                <TabList
                  onChange={handleChange}
                  sx={{ '& .MuiTabs-indicator': { display: 'none' }, minHeight: 'unset', p: 0.25 }}
                  variant="scrollable"
                >
                  {topics.map((item, index) => (
                    <Tab
                      label={item.title}
                      disableFocusRipple
                      {...(item.icon && {
                        icon: (
                          <SvgIcon
                            {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                            size={16}
                            stroke={2}
                            color="text.secondary"
                          />
                        )
                      })}
                      value={String(index + 1)}
                      key={index}
                      iconPosition="start"
                      tabIndex={0}
                      sx={{
                        minHeight: 44,
                        minWidth: { xs: 112, md: 160, sm: 156 },
                        borderRadius: 10,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'transparent',
                        '& svg ': { mr: 1 },
                        '&.Mui-selected': {
                          bgcolor: 'grey.200',
                          borderColor: 'grey.400',
                          minWidth: { xs: 112, md: 160, sm: 156 },
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
          </TabContext>
        </Stack>

        <Stack sx={{ gap: 1.5 }}>
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: 0.3
              }}
            >
              <GraphicsCard>
                <Box sx={{ pl: imagePadding, pt: imagePadding, height: { xs: 204, sm: 300, md: 360 } }}>
                  <GraphicsImage
                    image={image}
                    sx={{
                      height: 1,
                      backgroundPositionX: 'left',
                      backgroundPositionY: 'top',
                      borderTopLeftRadius: { xs: 12 },
                      borderBottomRightRadius: { xs: 20, sm: 32, md: 40 },
                      ...(showBorder && {
                        border: '5px solid',
                        borderColor: 'grey.200',
                        borderBottom: 'none',
                        borderRight: 'none'
                      })
                    }}
                  />
                </Box>
              </GraphicsCard>
            </motion.div>
          )}
          <Grid container spacing={1.5}>
            {features.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: item.animationDelay
                  }}
                >
                  <IconCard
                    icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                    title={item.title}
                    content={item.content}
                    contentCard
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}
