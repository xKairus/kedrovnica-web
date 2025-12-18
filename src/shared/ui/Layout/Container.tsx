import { ReactNode } from 'react';

export const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ 
      maxWidth: 'var(--container-width)', 
      margin: '0 auto', 
      padding: '0 20px',
      width: '100%' 
    }}>
      {children}
    </div>
  );
};