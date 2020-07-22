import React from "react";
import { text } from "@storybook/addon-knobs";

import HeroBanner from "./heroBanner";
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import BG1 from "stories/assets/bg-1.jpg";
import BG2 from "stories/assets/bg-2.jpg";

export default {
  title: "Components|Molecules/HeroBanner",
  component: HeroBanner,
};

export const withParagraph = () => (
  <HeroBanner image={BG1}>
    <Heading><h1>{text("Title", "Earn Your freedom to go anywhere.")}</h1></Heading>
    <p>{text("Paragraph", "Lorem ipsum dolor sit amet consectetur adipisicing elit.")}</p>
  </HeroBanner>
);

export const withList = () => (
  <HeroBanner image={BG2}>
    <Heading><h1>Earn Your <strong>freedom</strong><br /> to go anywhere.</h1></Heading>
    <ul className="hero-banner">
      <li className="hero-banner-list-item">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </li>
      <li className="hero-banner-list-item">
        Aperiam odio, eum beatae dignissimos eveniet excepturi?
      </li>
      <li className="hero-banner-list-item">
        Porro quibusdam labore beatae veritatis optio debitis, corrupti ea aut
        nam voluptas qui incidunt officiis.
      </li>
    </ul>
    <Button variant="outlined" color="primary">Apply Now</Button>
  </HeroBanner>
);
