import { MenuItem } from '../interfaces/global';

export const getMenuItem = (
  key: React.Key,
  label?: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: ''
) => ({
  key,
  icon,
  children,
  label,
  type,
});
