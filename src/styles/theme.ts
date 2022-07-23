import { NativeBaseProvider, extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      700: "#996DFF",
    },
    secondary: {
      700: "#FBA94C",
    },
    light:{
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    dark: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
    },
    white: "#FFFFFF",
    green: {
      700: "#00875F",
      500: "#00B37E",
      300: "#04D361",
    },
    
    
    
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});
