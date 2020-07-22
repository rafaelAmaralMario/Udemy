import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { select } from "@storybook/addon-knobs";


import GlobalStyle from "../src/styles/GlobalStyles";
import ThemeProvider, { themesNames } from "../src/styles/ThemeProvider";

addDecorator((storyFn) => (
  <ThemeProvider theme={select("Theme", themesNames, themesNames.light)}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
));

const viewports = {
  extraSmall: {
    name: "Portrait Phone (360x640)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "landscape Phone (640x360)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Table (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  large: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large Desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
};

addParameters({
  viewport: {
    viewports,
  },
});
