import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function CustomThemeProvider({ children }) {
  const theme = createTheme({
    // TYPOGRAPHY CONFIGURATION
    // Defines font styles throughout the app
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',

      // Page titles
      h1: {
        fontSize: "2rem", // 32px
        fontWeight: 700,
        color: "#1F2937",
      },

      // Section headers
      h2: {
        fontSize: "1.5rem", // 24px
        fontWeight: 600,
        color: "#1F2937",
      },

      // Card titles
      h3: {
        fontSize: "1.125rem", // 18px
        fontWeight: 600,
        color: "#1F2937",
      },

      // Body text
      body1: {
        fontSize: "0.875rem", // 14px
        color: "#1F2937",
      },

      // Secondary text
      body2: {
        fontSize: "0.8125rem", // 13px
        color: "#6B7280",
      },

      // Button text
      button: {
        textTransform: "none", // Don't uppercase buttons
        fontWeight: 500,
      },
    },

    // shape: {
    //   borderRadius: 2,
    // },
    shape: {
      borderRadius: 8, // You can set any numeric value here (e.g., 2, 4, 8, etc.)
    },

    // COMPONENT OVERRIDES
    // Customizes default MUI component styles
    components: {
      // Button styles
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "0.5rem", // 8px rounded corners
            padding: "0.5rem 1rem", // 8px 16px
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },

      // Card styles
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "0.75rem", // 16px rounded corners
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            border: "1px solid #E5E7EB",
          },
        },
      },

      // Paper/Dialog styles
      MuiPaper: {
        styleOverrides: {
          rounded: {
            borderRadius: "1rem", // 16px rounded corners
          },
        },
      },

      // Chip/Badge styles
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "9999px", // Fully rounded
            fontWeight: 500,
          },
        },
      },

      // Input field styles
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: "0.5rem", // 8px rounded corners
            },
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}

export default CustomThemeProvider;
