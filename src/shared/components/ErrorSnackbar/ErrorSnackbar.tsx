import { FC } from "react";
import { snackbarStore } from "../../../store";
import { Alert, AlertColor, AlertTitle, Snackbar } from "@mui/material";
import { useStore } from "zustand";
import { SnackbarTypeEnum } from "../../../interfaces/enums/SnackbarType.enum";

const SnackbarDurations: Record<SnackbarTypeEnum, number> = {
  critical: 20000,
  error: 15000,
  default: 5000,
  info: 5000,
  success: 5000,
  warning: 5000,
};

export const ErrorSnackbar: FC = () => {
  const { info, handleClose } = useStore(snackbarStore);

  return (
    <Snackbar
      open={!!info}
      autoHideDuration={SnackbarDurations[info?.type || "error"]}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <div className="max-w-md min-w-[320px]">
        <Alert
          onClose={handleClose}
          severity={(info?.type as AlertColor) || "error"}
          variant="filled"
        >
          <AlertTitle>Fehler</AlertTitle>
          <strong>{info?.message}</strong>
        </Alert>
      </div>
    </Snackbar>
  );
};
