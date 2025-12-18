import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

function CustomThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#F97316", // Vibrant Orange
        light: "#fe974eff", // Light Orange
        dark: "#e66c0fff", // Dark Orange
        contrastText: "#FFFFFF", // White text on orange
      },

      secondary: {
        main: "#2C3E50", // Dark Blue-Gray
        light: "#4A5F7F", // Light Blue-Gray
        dark: "#1A252F", // Darker Blue-Gray
        contrastText: "#FFFFFF", // White text
      },

      error: {
        main: "#E53935", // Red
        light: "#EF5350", // Light Red
        dark: "#C62828", // Dark Red
        contrastText: "#FFFFFF",
      },

      warning: {
        main: "#FB8C00", // Amber/Orange
        light: "#FFB74D", // Light Amber
        dark: "#E65100", // Dark Amber
        contrastText: "#000000",
      },

      success: {
        main: "#43A047", // Green
        light: "#66BB6A", // Light Green
        dark: "#2E7D32", // Dark Green
        contrastText: "#FFFFFF",
      },

      info: {
        main: "#1E88E5", // Blue
        light: "#42A5F5", // Light Blue
        dark: "#1565C0", // Dark Blue
        contrastText: "#FFFFFF",
      },

      background: {
        default: "#F5F5F5", // Light Gray (page background)
        paper: "#FFFFFF", // White (cards, modals, etc.)
      },

      text: {
        primary: "#212121", // Almost Black (main text)
        secondary: "#757575", // Gray (secondary text)
        disabled: "#BDBDBD", // Light Gray (disabled text)
      },

      divider: "#E0E0E0",

      custom: {
        gradients: {
          heroSection: "linear-gradient(90deg, #21C35E 0%, #059768 100%);",
          aboutPageCard: "linear-gradient(90deg, #F97316 0%, #EA580C 100%);",
        },
      },
    },

    // TYPOGRAPHY CONFIGURATION
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
        textTransform: "none",
        fontWeight: 500,
      },
    },

    shape: {
      borderRadius: 8,
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
            borderRadius: "0.6rem", // 16px rounded corners
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
