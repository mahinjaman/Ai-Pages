'use client';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';

// @project
import MenuPopper from './MenuPopper';
import SvgIcon from '@/components/SvgIcon';
import { Themes, ThemeDirection, ThemeMode } from '@/config';
import useConfig from '@/hooks/useConfig';

interface ThemeListProps {
  name: string;
  value: Themes;
  color: string;
}

/***************************  THEME SELECTOR - DATA  ***************************/

const themeOptions: ThemeListProps[] = [
  { name: 'CRM', value: Themes.THEME_CRM, color: '#D0BCFF' },
  { name: 'DEFAULT', value: Themes.THEME_DEFAULT, color: '#006397' },
  { name: 'AI', value: Themes.THEME_AI, color: '#006397' },
  { name: 'CRYPTO', value: Themes.THEME_CRYPTO, color: '#006D37' },
  { name: 'HOSTING', value: Themes.THEME_HOSTING, color: '#606BDF' },
  { name: 'PMS', value: Themes.THEME_PMS, color: '#897700' },
  { name: 'HRM', value: Themes.THEME_HRM, color: '#005cab' },
  { name: 'PLUGIN', value: Themes.THEME_PLUGIN, color: '#6375AD' },
  { name: 'LMS', value: Themes.THEME_LMS, color: '#005BC0' }
];

/***************************  NAVBAR - CUSTOMIZATION  ***************************/

export default function Customization({ selectedTheme }: { selectedTheme?: Themes }) {
  const theme = useTheme();

  const { currentTheme, onChangeCurrentTheme, onChangeThemeMode, onChangeThemeDirection } = useConfig();
  const [selected, setSelected] = useState<Themes>(selectedTheme || currentTheme);

  // handle theme selection change
  const onSelectionChange = (value: Themes) => {
    setOpen(!open);
    setSelected(value);
    onChangeCurrentTheme(value);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <MenuPopper
      offset={10}
      offsetX={15}
      toggleProps={{
        children: (
          <Badge
            badgeContent="New"
            color="error"
            slotProps={{ badge: { sx: { top: '-8px', right: '-8px', typography: 'caption', fontSize: '0.625rem' } } }}
          >
            <SvgIcon name="tabler-settings" color="primary.main" size={18} />
          </Badge>
        ),
        color: 'primary',
        variant: 'outlined',
        'aria-label': 'settings',
        sx: { minWidth: 40, width: 40, height: 40, p: 0 }
      }}
      popperWidth={234}
    >
      <List sx={{ p: 1.5 }}>
        <ListItem sx={{ px: 1 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <SvgIcon name="tabler-sun-moon" color="text.primary" stroke={1} />
          </ListItemIcon>
          <ListItemText color="grey.100">DARK</ListItemText>
          <Switch
            slotProps={{ input: { 'aria-label': 'dark-mode' } }}
            checked={theme.palette.mode === ThemeMode.DARK}
            onChange={() => onChangeThemeMode(theme.palette.mode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK)}
          />
        </ListItem>
        <ListItem sx={{ px: 1 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <SvgIcon name="tabler-text-direction-ltr" color="text.primary" stroke={1} />
          </ListItemIcon>
          <ListItemText color="grey.100">RTL</ListItemText>
          <Switch
            slotProps={{ input: { 'aria-label': 'direction-ltr' } }}
            checked={theme.direction === ThemeDirection.RTL}
            onChange={() => onChangeThemeDirection(theme.direction === ThemeDirection.RTL ? ThemeDirection.LTR : ThemeDirection.RTL)}
          />
        </ListItem>
        <ListItem sx={{ px: 1 }}>
          <ListItemIcon sx={{ minWidth: 32 }}>
            <SvgIcon name="tabler-color-swatch" color="text.primary" stroke={1} />
          </ListItemIcon>
          <ListItemText color="grey.100">Theme</ListItemText>
          <Button
            sx={{
              borderRadius: 2,
              height: 36,
              px: 1.5,
              justifyContent: 'space-between',
              bgcolor: 'grey.100',
              borderColor: 'grey.300',
              '&.MuiButton-root:hover': { borderColor: 'grey.600', bgcolor: 'grey.100' }
            }}
            onClick={handleClick}
            variant="contained"
            size="small"
            endIcon={<SvgIcon name="tabler-chevron-down" size={16} stroke={2} color="text.primary" />}
          >
            <Box
              sx={{
                width: 30,
                height: 16,
                bgcolor: themeOptions.find((item) => item.value === selected)?.color || 'grey.100',
                borderRadius: 1
              }}
            />
          </Button>
        </ListItem>
        <Collapse in={open && !selectedTheme} timeout="auto" unmountOnExit>
          <Box sx={{ p: 1 }}>
            <List disablePadding>
              <Grid container spacing={0.75}>
                {themeOptions.map((item, index) => (
                  <Grid key={index} size={12}>
                    <ListItemButton
                      sx={{ borderRadius: 2, p: 1, gap: 1 }}
                      selected={selected === item.value}
                      onClick={() => selected != item.value && onSelectionChange(item.value)}
                    >
                      <Box sx={{ width: 40, height: 20, bgcolor: item.color, borderRadius: 1 }} />
                      <ListItemText primary={item.name} slotProps={{ primary: { variant: 'body2' } }} />
                    </ListItemButton>
                  </Grid>
                ))}
              </Grid>
            </List>
          </Box>
        </Collapse>
      </List>
    </MenuPopper>
  );
}
