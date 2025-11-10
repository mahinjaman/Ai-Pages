import { ReactElement } from 'react';

export interface ChildrenProps {
  children: ReactElement;
}

export interface BreadcrumbProps {
  title: string;
  to?: string;
}
