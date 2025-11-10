'use client';

import { Suspense, useEffect, useState } from 'react';

// @next
import { Theme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// @project
import Loader from './Loader';
import { Themes } from '@/config';
import useConfig from '@/hooks/useConfig';

import defaultTheme from '@/views/landings/default/theme';
import crmTheme from '@/views/landings/crm/theme';
import aiTheme from '@/views/landings/ai/theme';
import cryptoTheme from '@/views/landings/crypto/theme';
import hostingTheme from '@/views/landings/hosting/theme';
import pmsTheme from '@/views/landings/pms/theme';
import hrmTheme from '@/views/landings/hrm/theme';
import pluginTheme from '@/views/landings/plugin/theme';
import lmsTheme from '@/views/landings/lms/theme';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  COMMON - THEME PROVIDER  ***************************/

export default function ThemeProviders({ theme, children }: { theme?: Theme } & ChildrenProps) {
  const config = useConfig();

  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  let themes = theme || defaultTheme(config);

  switch (config.currentTheme) {
    case Themes.THEME_CRM:
      themes = crmTheme(config);
      break;
    case Themes.THEME_AI:
      themes = aiTheme(config);
      break;
    case Themes.THEME_CRYPTO:
      themes = cryptoTheme(config);
      break;
    case Themes.THEME_HOSTING:
      themes = hostingTheme(config);
      break;
    case Themes.THEME_PMS:
      themes = pmsTheme(config);
      break;
    case Themes.THEME_HRM:
      themes = hrmTheme(config);
      break;
    case Themes.THEME_PLUGIN:
      themes = pluginTheme(config);
      break;
    case Themes.THEME_LMS:
      themes = lmsTheme(config);
      break;
    default:
      break;
  }

  /**
   * A loader is needed here to initialize the configuration from localStorage and set the default theme.
   * Without a loader,
   * the theme palette and fontFamily don't match, resulting in an error like:
   * "Warning: Prop className did not match".
   */

  return (
    <Suspense fallback={<Loader />}>
      {loader ? (
        <Loader />
      ) : (
        <ThemeProvider {...{ theme: themes }}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      )}
    </Suspense>
  );
}
