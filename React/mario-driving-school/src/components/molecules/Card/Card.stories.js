import React from "react";
import Card, { CardBody, CardMedia } from "./Card";
import { Button, Heading } from 'components/atoms';
import Section from "../Section/Section";

import BG1 from 'stories/assets/bg-1.jpg';

export default {
  title: "Components|Molecules/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia }
};

export const usage = () => (
  <Section inverted>
    <Card>
      <CardBody>
        <Heading>
          <h6>Card Title</h6>
        </Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci odit praesentium facilis fugiat distinctio corrupti necessitatibus dignissimos, voluptatem, officiis numquam, veritatis dolor cupiditate minima consequatur ut vitae nam a?</p>
        <div>
          <Button variant="link" color="primary">More Information</Button>
        </div>
      </CardBody>
    </Card>
  </Section>

);

export const withMedia = () => (
  <Section inverted>
    <Card>
      <CardMedia image={BG1} />
      <CardBody>
        <Heading>
          <h6>Card Title</h6>
        </Heading>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque adipisci odit praesentium facilis fugiat distinctio corrupti necessitatibus dignissimos, voluptatem, officiis numquam, veritatis dolor cupiditate minima consequatur ut vitae nam a?</p>
        <div>
          <Button variant="link" color="primary">More Information</Button>
        </div>
      </CardBody>
    </Card>
  </Section>

);
