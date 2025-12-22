import { SnackbarProvider, useSnackbar } from "notistack";
import { FeedbackContext } from "./CreateContext";

function FeedbackProviderContent({ children }) {
  const { enqueueSnackbar } = useSnackbar();

  const showFeedback = (message) => {
    console.log(message);
    enqueueSnackbar(message, { variant: "default" });
  };

  const showSuccessFeedback = (message) => {
    console.log(message);
    enqueueSnackbar(message, { variant: "success" });
  };

  const showErrorFeedback = (message) => {
    console.log(message);
    enqueueSnackbar(message, { variant: "error" });
  };

  const showInfoFeedback = (message) => {
    console.log(message);
    enqueueSnackbar(message, { variant: "info" });
  };

  const showWarningFeedback = (message) => {
    console.log(message);
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