import { GQLErrorTypeEnum } from '../../interfaces/enums/GQLErrorType.enum';

export interface SnackbarStoreTypes {
  open: boolean;
  info: SnackbarInfo | null;
  handleClose: () => void;
  handleOpen: (info: SnackbarInfo) => void;
}

export type SnackbarInfo = {
  type: GQLErrorTypeEnum;
  message?: string;
  action?: string;
};
