import { onError } from "@apollo/client/link/error";
import useStore, { FeedbackInput, FeedbackType } from "../../../states/feedbackState";

export const errorLink = () => {
  const setFeedback = useStore((state: FeedbackInput) => state.setFeedback)
  return onError(({ graphQLErrors, networkError, operation, forward }) => {
    switch (true) {
      case !!graphQLErrors:
        setFeedback?.({
          type: FeedbackType.Error,
          message: graphQLErrors && graphQLErrors[0].message,
          action: "Probiere es erneut",
        });
        break;
      case !!networkError:
        setFeedback?.({
          message: "Schwerwiegender Fehler",
          action: "Kontaktiere den Support",
          type: FeedbackType.Critical,
        });
        break;
    }
    return forward(operation);
  });
}