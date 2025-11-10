// @project
import { ThemeDirection, ThemeMode, Themes } from '@/config';

export interface ConfigProps {
  currentTheme: Themes;
  themeDirection: ThemeDirection;
  mode: ThemeMode;
}

export type CustomizationProps = {
  currentTheme: Themes;
  themeDirection: ThemeDirection;
  mode: ThemeMode;
  onChangeCurrentTheme: (direction: Themes) => void;
  onChangeThemeDirection: (direction: ThemeDirection) => void;
  onChangeThemeMode: (mode: ThemeMode) => void;
};
