import { SnackbarTypeEnum } from '../../interfaces/enums/SnackbarType.enum';

export interface SnackbarStoreTypes {
  info: SnackbarInfo | null;
  handleClose: () => void;
  handleOpen: (info: SnackbarInfo) => void;
}

export type SnackbarInfo = {
  type: SnackbarTypeEnum;
  message?: string;
};
