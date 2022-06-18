import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { FC, SyntheticEvent, useContext, useEffect, useState } from "react";
import FeedbackContext, { FeedbackType } from "../../../contexts/FeedbackContext";

const Feedback: FC = () => {

  const [open, setOpen] = useState<boolean>(false);
  const { feedback } = useContext(FeedbackContext);

  useEffect(() => {
    setOpen(!!feedback);  
  }, [feedback]);

  const close = (event?: SyntheticEvent | Event, reason?: string) => 
    reason !== "clickaway" && setOpen(false);

  const alert = (): any => {
    if (feedback) {
      switch(feedback?.type) {
        case FeedbackType.Critical:
          return  <Alert onClose={close} severity="error" variant="filled">
                    <AlertTitle>Fehler</AlertTitle>
                    <strong>{feedback?.message}</strong> {feedback?.action && "— " + feedback?.action}
                  </Alert>;
        case FeedbackType.Error:
          return  <Alert onClose={close} severity="error">
                    <AlertTitle>Fehler</AlertTitle>
                    <strong>{feedback?.message}</strong> {feedback?.action && "— " + feedback?.action}
                  </Alert>;
        case FeedbackType.Info:
          return  <Alert onClose={close} severity="info">
                    <AlertTitle>Fehler</AlertTitle>
                    <strong>{feedback?.message}</strong> {feedback?.action && "— " + feedback?.action}
                  </Alert>;
        case FeedbackType.Success:
          return  <Alert onClose={close} severity="success">
                    {feedback?.message}
                  </Alert>;
        default: return "";
      };
    }
  }

  const duration = (): any => {
    if (feedback) {
      switch(feedback.type) {
        case FeedbackType.Critical:
          return null;
        case FeedbackType.Error:
          return 15000;
        default:
          return 5000;
      }
    }
  };

  return (
    <Snackbar
        open={open}
        autoHideDuration={duration()}
        onClose={close}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}>
      {alert()}
    </Snackbar>
  );
};

export default Feedback;
