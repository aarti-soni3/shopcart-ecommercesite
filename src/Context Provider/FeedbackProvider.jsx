import { SnackbarProvider, useSnackbar } from "notistack";
import { FeedbackContext } from "./CreateContext";

function FeedbackProviderContent({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  const showFeedback = (message) => {
    enqueueSnackbar(message, { variant: "default" });
  };

  const showSuccessFeedback = (message) => {
    enqueueSnackbar(message, { variant: "success" });
  };

  const showErrorFeedback = (message) => {
    enqueueSnackbar(message, { variant: "error" });
  };

  const showInfoFeedback = (message) => {
    enqueueSnackbar(message, { variant: "info" });
  };

  const showWarningFeedback = (message) => {
    enqueueSnackbar(message, { variant: "warning" });
  };

  return (
    <FeedbackContext.Provider
      value={{
        showFeedback,
        showSuccessFeedback,
        showErrorFeedback,
        showInfoFeedback,
        showWarningFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default function FeedbackProvider({ children }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <FeedbackProviderContent>{children}</FeedbackProviderContent>
    </SnackbarProvider>
  );
}