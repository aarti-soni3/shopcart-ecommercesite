export const animations = {
  zoomOut: {
    "@keyframes zoomOut": {
      "0%": {
        transform: "scale(1.2)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
    transform: "scale(1)",
    animation: "zoomOut 0.25s ease-out",
  },
  zoomIn: {
    "@keyframes zoomIn": {
      "0%": {
        transform: "scale(1)",
      },
      "100%": {
        transform: "scale(1.2)",
      },
    },
      animation: "zoomIn 0.25s ease-in",
      transform: "scale(1.2)",
  },
};
