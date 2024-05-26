import { PropsWithChildren } from 'react';
import { Box, useTheme } from '@mui/material';

export const Footer = ({ children }: PropsWithChildren<unknown>) => {
  const theme = useTheme();

  if (!children) {
    return null;
  }

  return (
    <Box
      sx={{
        background: theme.palette.grey.A700,
        color: theme.palette.secondary.contrastText,
        padding: theme.spacing(2),
        textAlign: 'right',
      }}
     
    >
      { children }
      Version 1.0
    </Box>
  );
};
