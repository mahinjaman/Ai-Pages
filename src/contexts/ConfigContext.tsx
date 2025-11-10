'use client';

import { createContext } from 'react';

// @project
import defaultConfig, { ThemeDirection, ThemeMode, Themes } from '@/config';
import useLocalStorage from '@/hooks/useLocalStorage';

// @types
import { ChildrenProps } from '@/types/root';
import { CustomizationProps } from '@/types/config';

// @initial
const initialState: CustomizationProps = {
  ...defaultConfig,
  onChangeCurrentTheme: () => {},
  onChangeThemeDirection: () => {},
  onChangeThemeMode: () => {}
};

/***************************  CONFIG CONTEXT & PROVIDER  ***************************/

const ConfigContext = createContext(initialState);

function ConfigProvider({ children }: ChildrenProps) {
  const [config, setConfig] = useLocalStorage('sass-able-react-mui-next-ts', initialState);

  const onChangeCurrentTheme = (currentTheme: Themes) => {
    setConfig({
      ...config,
      currentTheme
    });
  };

  const onChangeThemeDirection = (direction: ThemeDirection) => {
    setConfig({
      ...config,
      themeDirection: direction
    });
  };

  const onChangeThemeMode = (mode: ThemeMode) => {
    setConfig({
      ...config,
      mode
    });
  };

  return <ConfigContext value={{ ...config, onChangeCurrentTheme, onChangeThemeDirection, onChangeThemeMode }}>{children}</ConfigContext>;
}

export { ConfigProvider, ConfigContext };
