import { FC } from 'react';
import { snackbarStore } from '../../../store';
import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';
import { useStore } from 'zustand';
import { SnackbarTypeEnum } from '../../../interfaces/enums/SnackbarType.enum';

const SnackbarDurations: Record<SnackbarTypeEnum, number> = {
  critical: 20000,
  error: 20000,
  default: 5000,
  info: 0,
  success: 0,
  warning: 0,
};

export const ErrorSnackbar: FC = () => {
  const { info, handleClose } = useStore(snackbarStore);

  return (
    <Snackbar
      open={!!info}
      autoHideDuration={SnackbarDurations[info?.type || 'error']}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <div className="max-w-md min-w-[320px]">
        <Alert
          onClose={handleClose}
          severity={(info?.type as AlertColor) || 'error'}
          variant="filled"
        >
          <AlertTitle>Fehler</AlertTitle>
          <strong>{info?.message}</strong>
          {/* <strong>{info?.message}</strong> {info?.action && '— ' + info?.action} */}
        </Alert>
      </div>
    </Snackbar>
  );
};
