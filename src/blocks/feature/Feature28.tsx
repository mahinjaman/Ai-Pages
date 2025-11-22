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

/***************************  FEATURE - 28  ***************************/

export default function Feature28({ heading, caption, image, features, showBorder = true, topics }: Props) {
  const imagePadding = { xs: 3, sm: 4, md: 5 };

  // ⭐ FIXED — detect icon type (tabler = stroke, custom = custom)
  const detectIconType = (iconName: string) => {
    if (iconName.startsWith('tabler-')) return IconType.STROKE;
    return IconType.CUSTOM;
  };

  const [value, setValue] = useState<string>('1');

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }} id="features">
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Typeset
            {...{
              heading,
              caption,
              stackProps: { sx: { alignItems: 'center', textAlign: 'center', maxWidth: { sm: 470, md: 615 }, mx: 'auto' } }
            }}
          />
        </motion.div>

        {/* Tabs Section */}
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
                      key={index}
                      label={item.title}
                      value={String(index + 1)}
                      icon={
                        <SvgIcon
                          {...(typeof item.icon === 'string' ? { name: item.icon } : { ...item.icon })}
                          size={16}
                          stroke={2}
                          color="text.secondary"
                        />
                      }
                      iconPosition="start"
                      disableFocusRipple
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
                          color: 'text.primary',
                          '& svg': { stroke: 'text.primary' }
                        },
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    />
                  ))}
                </TabList>
              </Box>
            </GraphicsCard>
          </TabContext>
        </Stack>

        {/* Feature Cards Section */}
        <Stack sx={{ gap: 1.5 }}>
          {image && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
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
                  transition={{ duration: 0.3, delay: item.animationDelay }}
                >
                  <IconCard
                    icon={{
                      name: item.icon as string,
                      type: detectIconType(item.icon as string)
                    }}
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
