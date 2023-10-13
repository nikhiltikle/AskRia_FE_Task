import { RcFile } from 'antd/es/upload';
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

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.onload = (url) => {
    callback(url.target?.result as string);
  };
  reader.readAsDataURL(img);
};
