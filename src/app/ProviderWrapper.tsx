// @project
import RTLLayout from '@/components/RTLLayout';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

// @types
import { ChildrenProps } from '@/types/root';

/***************************  COMMON - CONFIG, THEME  ***************************/

export default function ProviderWrapper({ children }: ChildrenProps) {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <RTLLayout>
          <main>{children}</main>
        </RTLLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
}
