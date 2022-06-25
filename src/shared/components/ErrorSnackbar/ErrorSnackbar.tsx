import { FC } from 'react';
import { snackbarStore } from '../../../store';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useStore } from 'zustand';

export const ErrorSnackbar: FC = () => {
  const { info, open, handleClose } = useStore(snackbarStore);

  return (
    <Snackbar
      open={open}
      {...(open && {
        autoHideDuration: open && 2000,
      })}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Alert onClose={handleClose} severity="error" variant="filled">
        <AlertTitle>Fehler</AlertTitle>
        <strong>{info?.message}</strong> {info?.action && '— ' + info?.action}
      </Alert>
    </Snackbar>
  );
};
