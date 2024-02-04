import { FC } from 'react';

export const Center: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <div className="flex h-full items-center justify-center">{children}</div>;
};
