import { createContext, useState } from "react";

export enum FeedbackType {
  Critical = 'CRITICAL',
  Error = 'ERROR',
  Info = 'INFO',
  Success = 'SUCCESS'
}

export type FeedbackInput = {
  type: FeedbackType,
  message?: string,
  action?: string,
}

export const FeedbackContext = createContext<any>(null);

export const FeedbackProvider: React.FunctionComponent = ({ children }) => {
  const [feedback, setFeedback] = useState<FeedbackInput | undefined>();

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        setFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
