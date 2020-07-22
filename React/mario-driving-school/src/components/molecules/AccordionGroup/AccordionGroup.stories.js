import React from "react";
import AccordionGroup from "./AccordionGroup";

import { Accordion } from 'components/atoms';

export default {
  title: "Components|Molecules/AccordionGroup",
  component: AccordionGroup,
};

export const usage = () => (
  <AccordionGroup>
    <Accordion title="How to renew my driver license?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
    </Accordion>
    <Accordion title="How do I change my license category?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
    </Accordion>
    <Accordion title="What can I do with my traffic ticket?">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit cum possimus officiis totam aperiam quibusdam eveniet rem omnis numquam, delectus qui repellat, facilis quasi corporis impedit doloremque explicabo, consequatur sunt.
    </Accordion>
  </AccordionGroup>
)
