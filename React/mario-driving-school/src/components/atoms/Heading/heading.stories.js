import React from "react";
import { text } from "@storybook/addon-knobs";

import Heading from './Heading';

export default {
  title: "Components|Atoms/Heading",
  component: Heading,
};

export const usage = () => (
  <>
    <Heading><h1>{text("Title 1", "Title")}</h1></Heading>
    <Heading><h2>{text("Title 2", "Title")}</h2></Heading>
    <Heading><h3>{text("Title 3", "Title")}</h3></Heading>
    <Heading><h4>{text("Title 4", "Title")}</h4></Heading>
    <Heading><h5>{text("Title 5", "Title")}</h5></Heading>
    <Heading><h6>{text("Title 6", "Title")}</h6></Heading>
  </>
);

